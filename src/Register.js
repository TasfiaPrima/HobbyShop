import React,{useState} from 'react'
import "./Register.css"
import HomeIcon from '@material-ui/icons/Home';
import {register} from "./API/auth.js";
import {useHistory} from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Register() {
  let history = useHistory();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RetypePassword, setRetypePassword] = useState("");
  const submitform = () => {
    const body = {
      firstname: FirstName,
      lastname: LastName,
      email: Email,
      password: Password,
      confirm_password: RetypePassword,
    };
    register(body).then((response) => {
      console.log(response);
      if (response.success) {
        alert(response.message);
        history.push("/login");
      } else {
        alert(response.message);
      }
    });
  };
  return (
    <div className="Register">
      <div className="Register-form">
        <Link to="/Aboutus" className="Register-homeicon">
          <HomeIcon />
        </Link>
        <div className="Register-header"> Hobby Shop Register</div>
        <div className="Register-InputContainer">
          <div className="Register-label">First Name: </div>
          <input
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="name"
            className="Register-input"
          ></input>
        </div>
        <div className="Register-InputContainer">
          <div className="Register-label">Last Name: </div>
          <input
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            type="name"
            className="Register-input"
          ></input>
        </div>
        <div className="Register-InputContainer">
          <div className="Register-label">Email: </div>
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="Register-input"
          ></input>
        </div>
        <div className="Register-InputContainer">
          <div className="Register-label">Password: </div>
          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="Register-input"
          ></input>
        </div>
        <div className="Register-InputContainer">
          <div className="Register-label">Retype Password: </div>
          <input
            value={RetypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            type="password"
            className="Register-input"
          ></input>
        </div>
        <div onClick={submitform} className="Register-btn">
          Register
        </div>
        <Link to="/Signin" className="Register-redirect">
          Go to Sign In
        </Link>
      </div>
    </div>
  );
}

export default Register
