import React from 'react'
import "./Aboutus.css"
import Aboutusimg2 from "./Images/Aboutusimg2.jpg"

function Aboutus() {
    return (
      <div className="Aboutus-image">
        <div className="Aboutus-half">
          <img
            className="Aboutus-upper"
            src={Aboutusimg2}
            alt=""
          />
          
          <div className="Aboutus-bottom">
            <div className="Aboutus-left">
            <div className="Aboutus-About">About</div>
            <div className="Aboutus-description">Hobby shop is a consumer-to-consumer e-commerce website that enables people to make money online by selling products they make as a hobby and customers can choose from a wide range of variety at an affordable price.</div>
            <div className="Aboutus-desc2">The products will be sold by two categories; readymade produccts and on-order made products</div>
            </div>
            <div className="Aboutus-right">
               <div className="Aboutus-Sellbtn">Sell with us </div> 
               <div className="Aboutus-selldesc2">Share with us your hobbies</div> 
            </div>
          </div>
          </div>
        
      </div>
    );
}

export default Aboutus
