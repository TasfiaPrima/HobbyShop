//const User = require('../models/User.model');
const Orders = require('../models/Orders.model');
const Cart = require('../models/Cart.model');
const Products = require('../models/Products.model');

const getOrder = async (req, res) => {
  const userId = req.params.userId;
  let totalBill = 0;
  try {
    let orders = await Orders.find({ userId });
    if (orders) {
      return res
        .status(200)
        .json({ success: true, message: 'order found', orders });
    } else {
      return res
        .status(504)
        .json({ success: false, message: 'finding orders failed' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'finding orders failed' });
  }
};

const addOrder = async (req, res) => {
  const userId = req.params.userId;
  const { products } = req.body;

  try {
    const contactDetails = req.body.contactDetails;
    const shippingAddress = req.body.shippingAddress;

    try {
      const newOrders = await Orders.create({
        userId,
        products: req.body.products,
        bill: req.body.bill,
        contactDetails: contactDetails,
        shippingAddress: shippingAddress,
      });
      const deletingCart = await Cart.find({ userId }).remove().exec();
      return res.status(201).json({ message: 'order', newOrders });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Something went wrong' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const deleteOrder = async (req, res) => {
  //const userId = req.params.userId;
  const orderId = req.params.orderId;
  try {
    let orders = await Orders.findByIdAndRemove(orderId);
    return res.status(200).json({ success: true, message: 'order deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

const checkout = async (req, res) => {
  try {
    const userId = req.params.userId;
    n;
    const { source } = req.body;
    let cart = await Cart.findOne({ userId });
    //let user = await Orders.userId.findOne({_id: userId});
    //const email = user.email;
    if (cart) {
      const charge = await stripe.charges.create({
        amount: cart.bill,
        currency: 'bdt',
        source: source,
        //receipt_email: email
      });
      if (!charge) throw Error('Payment failed');
      if (charge) {
        const order = await Orders.create({
          userId,
          items: cart.items,
          bill: cart.bill,
        });
        const data = await Cart.findByIdAndDelete({ _id: cart.id });
        return res.status(201).send(order);
      }
    } else {
      res.status(500).send('You do not have items in cart');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

module.exports = { addOrder, getOrder, deleteOrder, checkout };
