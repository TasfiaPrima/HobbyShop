import React from "react";
import Aboutusimg from "./Images/Aboutusimg.jpg";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Rating.css";

function Ratings() {
  const user = JSON.parse(sessionStorage.getItem("jwt"));
  let history = useHistory();
  return (
    <div className="rating">
      <div className="rating-name">
        <div className="rating-topup">
          <Avatar
            src={`http://localhost:4000/${user.image}`}
            style={{ height: "10vh", width: "7vw" }}
          />

          <div className="rating-nameoftop">
            {user.firstname} {user.lastname}
          </div>
        </div>
        <div className="rating-namestyle">
          <Link to="/" className="rating-Categories">
            Categories
          </Link>
          <Link
            to="/Myorder"
            style={{ textDecoration: "none", fontSize: "25px" }}
            className="rating-myorders"
          >
            My Orders{" "}
          </Link>
          <Link
            to="/Wishlist"
            style={{ textDecoration: "none", fontSize: "25px" }}
            className="Editprofile-wishlist"
          >
            Wishlist
          </Link>
          <Link
            to="/NotiPage"
            style={{ textDecoration: "none", fontSize: "25px" }}
            className="rating-notification"
          >
            Notifications
          </Link>

          <div
            onClick={() => {
              sessionStorage.removeItem("jwt");
              history.push("/");
            }}
            className="rating-logout"
          >
            Logout
          </div>
        </div>
      </div>
      <div className="rating-right">
      <div className="rating--right-top">My ratings & reviews</div>
      <div className="rating-right-lower">
        <img
          className="Wishlist-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdHGbdmFlhLqoFbADot-7HwhNiFoBm_JHQjvbh4kS9hQwNs2GjXsKFBs73gn3nsPvWRw&usqp=CAU"
        ></img>
        <div className="rating-product-right"> 
        <div className="rating-product-btn">
          <div className="rating-product-space">
            <div className="rating-info">product 1</div>
            <div className="rating-Rating">Rating value</div>
          </div>
          
          </div>
          <div className="rating-Description">rating product desciption</div>
          </div> 
      </div>
    </div>
    </div>
  );
}

export default Ratings;
