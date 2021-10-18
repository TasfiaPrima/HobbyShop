import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Aboutusimg from './Images/Aboutusimg.jpg';
import './Myorder.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { getOrder } from './API/order';

function Myorder() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  let history = useHistory();
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    getOrder(user._id).then((response) => {
      if (response.success) {
        console.log(response.orders);
        setAllOrder(response.orders);
      } else {
        alert(response.message);
      }
    });
  }, []);

  return (
    <div className='myorder'>
      <div className='myorder-name'>
        <div className='myorder-topup'>
          <Avatar
            src={`http://localhost:4000/${user.image}`}
            style={{ height: '10vh', width: '7vw' }}
          />

          <div className='myorder-nameoftop'>
            {user.firstname} {user.lastname}
          </div>
        </div>
        <div className='myorder-namestyle'>
          <Link to='/' className='myorder-Categories'>
            Categories
          </Link>
          <Link
            to='/Wishlist'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='myorder-wishlist'>
            Wishlist
          </Link>
          <Link
            to='/Rating'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='myorder-myorders'>
            My ratings & My reviews
          </Link>
          <Link
            to='/NotiPage'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='myorder-notification'>
            Notifications
          </Link>

          <div
            onClick={() => {
              sessionStorage.removeItem('jwt');
              history.push('/');
            }}
            className='myorder-logout'>
            Logout
          </div>
        </div>
      </div>
      <div className='myorder-right'>
        <div className='myorder--right-top'>My Orders</div>
        {allOrder.map((oneOrder) => (
          <div className='myorder_oneOrder'>
            {oneOrder.products.map((product) => (
              <div className='myorder-right-lower'>
                <img
                  className='Wishlist-image'
                  src={`http://localhost:4000/${product.image}`}></img>
                <div className='myorder-product-right'>
                  <div className='myorder-product-btn'>
                    <div className='myorder-product-space'>
                      <div className='myorder-info'>{product.name}</div>
                      <div className='myorder-Tk'>Tk</div>
                      <div className='myorder-rating'>
                        Quantity: {product.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className='myorder__bill'>Total: {oneOrder.bill}</div>
            <div className='myorder__ShippingAddress'>
              Shipping Address: {oneOrder.shippingAddress}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myorder;
