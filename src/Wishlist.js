import React, { useEffect, useState } from 'react';
import Aboutusimg from './Images/Aboutusimg.jpg';
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from './StateProvider/StateProvider';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Wishlist.css';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getWish, deleteWish } from './API/wishlist';
import { addCart } from './API/cart';

function Wishlist() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  let history = useHistory();
  const [Lists, setLists] = useState([]);
  const [wishId, setWishId] = useState();
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedID, setSelectedID] = useState('');

  useEffect(() => {
    getWish(user._id).then((response) => {
      if (response.success) {
        setLists(response.wishlist);
        console.log(response.wishlist);
      } else {
        alert(response.message);
      }
    });
  }, []);

  const addToCart = (id, image) => {
    let body = {
      products: {
        productId: id,
        quantity: 1,
        image: image,
        userId: user._id,
      },
    };
    addCart(body).then((response) => {
      if (response.success) {
        alert(response.message);
      } else {
        alert(response.message);
      }
    });
    console.log(body);
  };

  const deleteWishList = (id) => {
    deleteWish(id).then((response) => {
      alert(response.message);
    });
  };

  return (
    <div>
      <div className='Wishlist'>
        <div className='Wishlist-left'>
          <div className='Wishlist-name'>
            <div className='Wishlist-topup'>
              <Avatar
                src={`http://localhost:4000/${user.image}`}
                style={{ height: '10vh', width: '7vw' }}
              />
            </div>
            <div className='Wishlist-nameoftop'>
              {user.firstname} {user.lastname}
            </div>

            <div className='Wishlist-namestyle'>
              <Link to='/' className='Editprofile-Categories'>
                Categories
              </Link>
              <Link
                to='/Myorder'
                style={{ textDecoration: 'none', fontSize: '25px' }}
                className='Editprofile-myorders'>
                My Orders{' '}
              </Link>
              <Link
                to='/Rating'
                style={{ textDecoration: 'none', fontSize: '25px' }}
                className='Editprofile-ratings'>
                My ratings & My reviews
              </Link>
              <Link
                to='/NotiPage'
                style={{ textDecoration: 'none', fontSize: '25px' }}
                className='Editprofile-notification'>
                Notifications
              </Link>

              <div
                onClick={() => {
                  sessionStorage.removeItem('jwt');
                  history.push('/');
                }}
                className='Editprofile-logout'>
                Logout
              </div>
            </div>
          </div>
        </div>
        <div className='Wishlist-right'>
          <div className='Wishlist-result'>My Wishlist </div>
          <div className='Wishlist-noitems'>{Lists.length} Items</div>

          {Lists.map((one) => (
            <div
              className='Wishlist-products'
              onClick={() => {
                setWishId(one._id);
              }}>
              <img
                className='Wishlist-image'
                src={`http://localhost:4000/${one.products.image}`}></img>
              <div className='Wishlist-product-right'>
                <div className='Wishlist-product-btn'>
                  <div className='Wishlist-product-space'>
                    <div className='Wishlist-info'>{one.products.name}</div>
                  </div>
                  <div className='Wishlist-btn'>
                    <Link className='Wishlist-btn-1'>
                      <button
                        className='Wishlist-btn-btn'
                        onClick={() => {
                          deleteWishList(one._id);
                        }}>
                        <a className='Wishlist-btn-btn'>Remove from wishlist</a>
                      </button>
                    </Link>
                    <Link className='Wishlist-btn-1'>
                      <button
                        className='Wishlist-btn-btn'
                        onClick={() => {
                          setSelectedID(one.products.productId);
                          setSelectedImage(one.products.image);
                          addToCart(one.products.productId, one.products.image);
                        }}>
                        <a className='Wishlist-btn-btn'>Add to Cart</a>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
