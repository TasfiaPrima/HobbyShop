import React from 'react'
import "./Inproduct.css"

function Inproduct() {
    return (
        <div className="inproduct">
           <div className="inproduct-header">Plants</div> 
           <div className="inproduct-card">
               <span className="card-tag">#1 Best Seller</span>
               <div className="card-header">
                   <img src="https://st.depositphotos.com/2632165/4026/i/600/depositphotos_40264933-stock-photo-young-plant.jpg"/>
               </div>
               <div className="card-body">
                   <h4 className="inproduct-title">This is a Plant</h4>
                   <p className="inproduct-status">Ships in 3-4 days </p>
                   <h3 className="inproduct-price">240.00 Tk</h3>
               </div>
               <div className="card-footer">
                  <button className="btnn btnnsecondary">
                      Add to cart
                  </button>
                  <button className="btnn btnnprimary">
                      Add to wishlist
                  </button>
               </div>
           </div>
        </div>
    )
}

export default Inproduct
