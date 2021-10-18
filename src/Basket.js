import React, { useState, useEffect } from 'react';
import './Basket.css';
import Aboutusimg from './Images/Aboutusimg.jpg';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { getCart, deleteCart } from './API/cart';

function Basket() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  const [allCart, setAllCart] = useState([]);
  const [items, setItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(100);
  let history = useHistory();
  useEffect(() => {
    let body = {
      userId: user._id,
    };
    getCart(body).then((response) => {
      console.log(response);
      if (response.success) {
        let totalItems = 0;
        let subCost = 0;
        setAllCart(response.cart);
        response.cart.forEach((product) => {
          totalItems += product.products.quantity;
          subCost += product.bill;
        });
        setItems(totalItems);
        setSubtotal(subCost);
      } else {
        alert('Cart not found');
      }
    });
  }, []);

  const removeCart = (id) => {
    deleteCart(id).then((response) => {
      if (response.success) {
        alert(response.message);
      } else {
        alert(response.message);
      }
    });
  };
  return (
    <div
      classname='basket'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '82vh',
      }}>
      <div classname='basket-one' style={{ marginBottom: '19vh' }}>
        <div className='basket-topup'>
          <Avatar
            src={`http://localhost:4000/${user.image}`}
            style={{ height: '10vh', width: '7vw' }}
          />
        </div>
        <div className='basket-nameoftop'>
          {user.firstname} {user.lastname}
        </div>

        <div className='basket-namestyle'>
          <Link to='/' className='basket-Categories'>
            Categories
          </Link>
          <Link
            to='/Myorder'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='basket-myorders'>
            My Orders{' '}
          </Link>
          <Link
            to='/Wishlist'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='basket-wishlist'>
            Wishlist
          </Link>
          <Link
            to='/Rating'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='basket-ratings'>
            My ratings & My reviews
          </Link>
          <Link
            to='/NotiPage'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='basket-notification'>
            Notifications
          </Link>

          <div
            onClick={() => {
              sessionStorage.removeItem('jwt');
              history.push('/');
            }}
            className='basket-logout'>
            Logout
          </div>
        </div>
      </div>
      <div
        classname='basket-two'
        style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='basket-cart'> My Cart</div>
        {allCart.map((cart) => (
          <div>
            <img
              src={`http://localhost:4000/${cart.products.image}`}
              className='basket-img1'
            />
            <div className='basket-des'>{cart.products.name}</div>
            <div className='basket-taka'>TK {cart.bill}</div>
            <div className='basket-taka'>Quantity {cart.products.quantity}</div>
            <div className='basket-rating'>
              &#11088;&#11088;&#11088;&#11088;&#11088;
            </div>
            <div
              className='basket-remove'
              onClick={() => {
                removeCart(cart._id);
              }}>
              Remove From basket
            </div>
          </div>
        ))}
      </div>
      <div
        classname='basket-three'
        style={{
          backgroundColor: 'rgba(255, 172, 137, 0.09)',
          height: '30vh',
          width: '20vw',
        }}>
        <div className='basket-chechkout'> Items: {items}</div>
        <div className='basket-chechkout'> Subtotal: {subtotal}</div>
        <div className='basket-chechkout'> Shipping cost: {shipping}</div>
        <div className='basket-chechkout'> Total: {shipping + subtotal}</div>
        <Link to='/checkout' className='basket-chechkout1'>
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Basket;
