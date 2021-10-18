import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Aboutusimg from "./Images/Aboutusimg.jpg";
import {useHistory} from 'react-router-dom'
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Editprofile.css";

function Editprofile() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  let history = useHistory();
  return (
    <div className="Editprofile">
      <div className="Editprofile-name">
        <div className="Editprofile-topup">
          <Avatar src={`http://localhost:4000/${user.image}`} style={{ height: "10vh", width: "7vw" }} />
        </div>
        <div className="Editprofile-nameoftop">{user.firstname}{" "} {user.lastname}</div>

        <div className="Editprofile-namestyle">
          <Link to="/" className="Editprofile-Categories">
            Categories
          </Link>
          <Link to="/Myorder" style={{ textDecoration:"none",fontSize:"25px" }} className="Editprofile-myorders">My Orders </Link>
          <Link to="/Wishlist" style={{ textDecoration:"none",fontSize:"25px" }} className="Editprofile-wishlist">Wishlist</Link>
          <Link to="/Rating" style={{ textDecoration:"none",fontSize:"25px" }}  className="Editprofile-ratings">My ratings & My reviews</Link>
          <Link to="/NotiPage" style={{ textDecoration:"none",fontSize:"25px" }}  className="Editprofile-notification">Notifications</Link>

          <div onClick={()=>{sessionStorage.removeItem('jwt'); history.push("/") }} className="Editprofile-logout">Logout</div>
        </div>
      </div>
      <div className="Editprofile-right">
        <div className="Editprofile-topright">
          <div className="Editprofile-topup2">
            <Avatar
              src={`http://localhost:4000/${user.image}`}
              style={{ height: "20vh", width: "14vw", marginTop: "5vh" }}
            />
          </div>
          <div className="Editprofile-btn">
            <button>
              <a>Upload New</a>
            </button>
          </div>
        </div>
        <div className="Editprofile-right-editprofile">Edit Profile</div>
        <div className="Editprofile-right-middle">
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">First name : </div>
            <input placeholder="Enter your first name" className="Editprofile-current" type="" size="18" />
          </div>
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">Last name : </div>
            <input placeholder="Enter your last name" className="Editprofile-current" type=""  size="18" />
          </div>
          
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">Phone number : </div>
            <input placeholder="Enter your Phone number" className="Editprofile-current" type=""  size="18" />
          </div>
          
          <div className="Editprofile-right-lower">
          <div className="Editprofile-btn-1">
            <button>
              <a>Save</a>
            </button>
          </div>
          <div className="Editprofile-btn-2">
            <button>
              <a>Cancel</a>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editprofile;
