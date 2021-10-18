import React,{useState} from 'react'
import "./Signin.css"
import HomeIcon from '@material-ui/icons/Home';
import {login} from "./API/auth.js";
import {useHistory} from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Signin() {
           let history = useHistory();
        const [Email,setEmail]= useState("");
        const [Password,setPassword]= useState("");
         const submitform=async()=>{
          let body={email: Email, password: Password}
          login(body).then((response) => {
            console.log(response);
          
            if (response.success) {
              authenticate(response.user);
              alert(response.message);
              history.push("/");
            } else {
              alert(response.message);
            }
          });
        }
        const authenticate = async (jwt) => {
          if (typeof window !== 'undefined') {
            await sessionStorage.setItem('jwt', JSON.stringify(jwt));
          }
        };
    return (
      <div className="Signin">
      <div className="Signin-form">
          <Link to="/Aboutus" className="Signin-homeicon">
            <HomeIcon/>
          </Link>
          <div className="Signin-Header">Hobby Shop Sign In</div>
          <div className="Signin-InputContainer"> 
            <div className="Signin-label">Email: </div>
            <input  value={Email}
            onChange={(e) => setEmail(e.target.value)} type="email" className="Signin-input"></input>
          </div>
          <div className="Signin-InputContainer">
            <div className="Signin-label">Password: </div>
            <input value={Password}
            onChange={(e) => setPassword(e.target.value)} type="password" className="Signin-input"></input>
          </div>
          <div onClick={submitform} className='Signin-btn'>
              Signin
              </div>
              <Link to="/Register"className='Signin-redirect'>
              Go to Register
              </Link>
          </div>
          </div>
    );
}

export default Signin
