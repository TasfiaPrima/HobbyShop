import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { update } from "./API/auth.js";
import "./Changepass.css";


function Changepass() {
  const user = JSON.parse(sessionStorage.getItem("jwt"));
  let history = useHistory();
  return (
    <div className="changepass">
      <div className="changepass-name">
        <div className="changepass-topup">
          <Avatar
            src={`http://localhost:4000/${user.image}`}
            style={{ height: "10vh", width: "7vw" }}
          />
        </div>
        <div className="changepass-nameoftop">
          {user.firstname} {user.lastname}
        </div>

        <div className="changepass-namestyle">
          <Link to="/" className="changepass-Categories">
            Categories
          </Link>
          <div className="changepass-myorders">My Orders </div>
          <Link to="Wishlist" className="changepass-wishlist">
            Wishlist
          </Link>
          <div className="changepass-ratings">My ratings & My reviews</div>
          <div className="changepass-notification">Notifications</div>

          <div
            onClick={() => {
              sessionStorage.removeItem("jwt");
              history.push("/");
            }}
            className="changepass-logout"
          >
            Logout
          </div>
          </div>
          </div>
         <div className="changepass-right">
          <div className="changepass-right-textarea">
            <div className="changepass-Info">Current Password : </div>
            <input
              placeholder="max length 8"
              className="changepass-current"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              type="password"
              maxlength="8"
              size="18"
            />
          </div>
          <div className="changepass-right-textarea">
            <div className="changepass-Info">New Password: </div>
            <input
              placeholder="Enter your new 8 length Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              className="changepass-current"
              type="password"
              maxlength="8"
              size="18"
            />
          </div>
          <div className="changepass-right-textarea">
            <div className="changepass-Info">Confirm Password: </div>
            <input
              placeholder=" confirm your new Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              className="changepass-current"
              type="password"
              maxlength="8"
              size="18"
            />
          </div>
          <div className="changepass-right-lower">
            <div className="changepass-btn-1">
              <button>
                <a>Save</a>
              </button>
            </div>
            <div className="changepass-btn-2">
              <button>
                <a>Cancel</a>
              </button>
            </div>
          </div>
 
          </div>

        
     
    </div>
  );
}

export default Changepass
