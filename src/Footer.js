import React from 'react'
import "./footer.css"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Footer() {
    return (
      <div className="footer">
        <Link to="/" className="footer-home">
          <h3>Home</h3>
        </Link>
        <Link to="/Aboutus" className="footer-about">
          <h3>About </h3>
        </Link>
        <Link  className="footer-contact-us">
          <h3> Contact us</h3>
        </Link>
      </div>
    );
}

export default Footer;
