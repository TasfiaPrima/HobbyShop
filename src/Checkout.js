import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { useHistory } from 'react-router-dom';
import { addOrder } from './API/order';
import { getCart, deleteCart } from './API/cart';

function Checkout() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  const [allCart, setAllCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(100);
  const [contactDetails, setContactDetails] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  useEffect(() => {
    let body = {
      userId: user._id,
    };
    getCart(body).then((response) => {
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
  useEffect(() => {
    let allproducts = [];
    allCart.forEach((prod) => {
      allproducts.push({
        productId: prod.products.productId,
        name: prod.products.name,
        image: prod.products.image,
        quantity: prod.products.quantity,
      });
    });
    setProducts(allproducts);
  }, [allCart]);

  const placeOrder = () => {
    let body = {
      userId: user._id,
      products: products,
      bill: shipping + subtotal,
      contactDetails: contactDetails,
      shippingAddress: shippingAddress,
    };
    addOrder(body).then((response) => {
      alert(response.message);
    });
  };

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <div className='checkout-inputfeilds'>
          <div className='checkout-contactdetailsfeild'>
            <div
              className='checkout-contactdetails'
              value={contactDetails}
              onClick={(e) => {
                setContactDetails(e.target.value);
              }}>
              Contact Details:{' '}
            </div>
            <textarea row='3' className='checkout-input' />
          </div>
          <div className='checkout-shippingaddressfeild'>
            <div
              className='checkout-shippingaddress'
              value={shippingAddress}
              onClick={(e) => {
                setShippingAddress(e.target.value);
              }}>
              Shipping Address:
            </div>
            <textarea row='3' className='checkout-input' />
          </div>
        </div>
        <div className='checkout-lowerbox'>
          Method of Payment:
          <div className='checkout-radio'>
            <div className='checkout-label'>
              <input
                type='radio'
                id='html'
                name='fav_language'
                value='HTML'></input>
              <label className='label' for='html'>
                Cash on delivery
              </label>
            </div>
            <div className='checkout-label'>
              <input
                type='radio'
                id='css'
                name='fav_language'
                value='CSS'></input>
              <label className='label' for='css'>
                Credit/debit
              </label>
            </div>
            <div className='checkout-label'>
              <input
                type='radio'
                id='css'
                name='fav_language'
                value='CSS'></input>
              <label className='label' for='css'>
                Mobile Money system
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='checkout-right'>
        <div className='checkout-words'>
          <div className='checkout-items'>Items: {items}</div>
          <div className='checkout-subtotal'>Subtotal: {subtotal}</div>
          <div className='checkout-shipping'>Shipping: {shipping}</div>
          <div className='checkout-total'>Total: {shipping + subtotal}</div>
          <div className='checkout-placeorder' onClick={placeOrder}>
            Place Order
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
