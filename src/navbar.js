import React,{useState} from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FaceIcon from '@material-ui/icons/Face';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  let history = useHistory();
  const [search,setSearch]=useState("")
  const clickIcon = () => {history.push(`/Search/${search}`)}
  const changeInput = (e) => {setSearch(e.target.value)}
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  console.log(user);
  return (
    <div className="navbar">
      <Link to="/Aboutus" className="navbar-header">
        <h3 href="/home">Hobby Shop</h3>
      </Link>
      <div className={`${user?' navbar-search':'logout-navbar-search'}`}>
      <div onClick={clickIcon} className="navbar-iconcontainer">
      <SearchIcon className="navbar__searchIcon" style={{height:"3.15vh"}}/>
      </div>
        <input value= {search} onChange={changeInput} type="text" className="navbar__searchInput" placeholder="Search" />
        
      </div>

      { user? <div className="navbar-icons">
      <Link to="/basket" className="navbar-basket" style={{color:"black", paddingRight:"1vw"}}>
          <ShoppingBasketIcon/>
      </Link>
      <Link to= "/customer" className="navbar-customer" style={{color:"black", paddingRight:"1vw"}}>
          <FaceIcon/>
      </Link>
      <Link to= "/Notipage" className="navbar-bell" style={{color:"black", paddingRight:"1vw"}}>
          <NotificationsIcon/>
      </Link>
      <Link to="/Signin" className="navbar-signinlogo" style={{color:"black", paddingRight:"1vw"}}>
           <AccountCircleIcon/>
      </Link>
       </div>:
       <Link to="/Signin" className="navbar-login" style={{color:"black", paddingRight:"1vw"}}>
           Login
      </Link> } 
    </div>
  );
}

export default Navbar;
