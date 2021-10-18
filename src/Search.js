import React from "react";
import Aboutusimg from "./Images/Aboutusimg.jpg";
import Avatar from "@material-ui/core/Avatar";
import {useStateValue} from './StateProvider/StateProvider'
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Search.css";
import {useHistory} from 'react-router-dom'
import { useParams } from 'react-router-dom';


function Search() {
  let history = useHistory();
  const [state, dispatch] = useStateValue();
  const {search}=useParams()
  let filteredProducts= state.Allproducts.filter(oneproduct => oneproduct.category===search);
  
  return (
    <div>
      <div className="Search">
        <div className="Search-left">
          <div className="Search-name">
            <div className="Search-topup">
              <Avatar
                src={Aboutusimg}
                style={{ height: "10vh", width: "7vw" }}
              />
            </div>
            <div className="Search-nameoftop">User Name</div>

            <div className="Search-namestyle">
            <Link to="/" className="Search-Categories">
            Categories
          </Link>
          <Link to="/Myorder" style={{ textDecoration:"none",fontSize:"25px" }} className="Search-myorders">My Orders </Link>
          <Link to="/Wishlist" style={{ textDecoration:"none",fontSize:"25px" }} className="Search-wishlist">Wishlist</Link>
          <Link to="/Rating" style={{ textDecoration:"none",fontSize:"25px" }}  className="Search-ratings">My ratings & My reviews</Link>
          <Link to="/NotiPage" style={{ textDecoration:"none",fontSize:"25px" }}  className="Search-notification">Notifications</Link>

          <div onClick={()=>{sessionStorage.removeItem('jwt'); history.push("/") }} className="Search-logout">Logout</div>
            </div>
          </div>
        </div>
        <div className="Search-right">
          <div className="Search-result">Search Results for {search} </div>
          <div className="Search-noitems">2 Iteams</div>
             <div className="Search-map"> 
             {filteredProducts.map((product) => (
                <div className="Search-products">
            <img
              className="Search-image"
              src={product.imageUrl}
            ></img>
            <div className="Search-product-right">
            <div className="Search-product-btn">
              <div className="Search-product-space">
                <div className="Search-info">{product.title}</div>
                <div className="Search-Tk">Tk</div>
                <div className="Search-Rating">Rating</div>
              </div>
              <div className="Search-btn">
              <Link className='Search-btn-1'>
              <button className="Search-btn-btn">
                  <a className="Search-btn-btn">
                      Add to Cart
                  </a>
              </button>
          </Link>
          <Link className='Search-btn-1'>
              <button className="Search-btn-btn">
                  <a className="Search-btn-btn">
                      Add to wishlist
                  </a>
              </button>
          </Link>
          </div>
          </div>
              <div className="Search-Description">{product.body}</div>
            </div>
          </div>
               )  )}
               </div>
         
        </div>
      </div>
    </div>
  );
}

export default Search;
