const express = require('express');
const User = require('../models/user.model');
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { response } = require('../app');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: 'All fields are required!',
    });
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(401).json({
      success: false,
      message: 'No such user exists!',
    });
  } else {
    console.log(existingUser);
    const user = await bcrypt
      .compare(password, existingUser.password)
      .then((user) => {
        if (!user)
          return res
            .status(400)
            .json({ success: false, message: 'Password did not match!' });
        else
          return res.status(200).json({
            success: true,
            user: existingUser,
            message: 'logged in',
          });
      });
  }
};

const postRegister = (req, res) => {
  const { firstname, lastname, email, password, confirm_password } = req.body;

  if (!firstname || !lastname || !email || !password || !confirm_password) {
    return res.status(401).json({
      success: false,
      message: ' All fields are required!',
    });
  }

  if (password.length < 6) {
    return res.status(401).json({
      success: false,
      message: ' Password must be at least 6 characters!',
    });
  }
  if (password !== confirm_password) {
    return res.status(401).json({
      success: false,
      message: ' Passwords do not match. Please try again',
    });
  }

  //Create New User
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(500).json({
        success: false,
        message: 'User already exists with this email',
      });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'problem with generating salt',
          });
        } else {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
              return res.status(500).json({
                success: false,
                message: 'problem with hashing',
              });
            } else {
              const newUser = new User({
                firstname,
                lastname,
                email,
                password: hash,
              });

              newUser
                .save()
                .then((user) => {
                  jwt.sign(
                    { id: user._id },
                    process.env.jwtSecret,
                    { expiresIn: 3600 },
                    (err, token) => {
                      if (err) throw err;
                      res.json({
                        success: true,
                        token,
                        message: ' User created',
                        user: {
                          id: user._id,
                          name: user.name,
                          email: user.email,
                        },
                      });
                    }
                  );
                })
                .catch((err) => {
                  console.log(err);
                  return res.status(500).json({
                    success: false,
                    message: 'User Creation Failed',
                  });
                });
            }
          });
        }
      });
    }
  });
};
const update = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.json({ success: false, message: 'User not found' });
    }
    console.log(req.file.path);
    //user = extend(user, req.body);
    user.image = req.file.path;

    await user.save();

    res.json({ success: true, user: user });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: 'Unable to update user.',
    });
  }
};

module.exports = {
  postRegister,
  postLogin,
  update,
};
