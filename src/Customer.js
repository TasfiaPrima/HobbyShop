import React, { useState, useEffect } from 'react';
import './customer.css';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { update } from './API/auth.js';

function Customer() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  const [file, setFile] = useState();
  let history = useHistory();
  const handleImage = async (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }

    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    formData.append('email', user.email);
    console.log(formData);
    update(formData).then((response) => {
      console.log(response);
      if (response.success) {
        user.image = response.user.image;
        sessionStorage.setItem('jwt', JSON.stringify(user));
      }
    });
  };
  useEffect(() => {
    console.log(user);
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {};
    fileReader.readAsDataURL(file);
  }, [file]);
  return (
    <div className='customer'>
      <div className='customer-name'>
        <div className='customer-topup'>
          <Avatar
            src={`http://localhost:4000/${user.image}`}
            style={{ height: '10vh', width: '7vw' }}
          />
        </div>
        <div className='customer-nameoftop'>
          {user.firstname} {user.lastname}
        </div>

        <div className='customer-namestyle'>
          <Link to='/' className='customer-Categories'>
            Categories
          </Link>
          <Link
            to='/Addproduct'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='customer-myorders'>
            Add Products{' '}
          </Link>
          <Link
            to='/Myorder'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='customer-myorders'>
            My Orders{' '}
          </Link>
          <Link
            to='/Wishlist'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='customer-wishlist'>
            Wishlist
          </Link>
          <Link
            to='/Rating'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='customer-ratings'>
            My ratings & My reviews
          </Link>
          <Link
            to='/NotiPage'
            style={{ textDecoration: 'none', fontSize: '25px' }}
            className='customer-notification'>
            Notifications
          </Link>

          <div
            onClick={() => {
              sessionStorage.removeItem('jwt');
              history.push('/');
            }}
            className='customer-logout'>
            Logout
          </div>
        </div>
      </div>
      <div className='customer-card'>
        <div className='customer_content'>
          <div className='customer-title'>
            <h3>Customer Profile</h3>
          </div>
          <div className='customer-right'>
            <div className='customer-body'>
              <div className='customer-info'>First Name: {user.firstname}</div>
              <div className='customer-info'>Last Name: {user.lastname}</div>
              <div className='customer-info'>Email: {user.email}</div>

              <div className='customer-lower'>
                <Link to='/customer' className='customer-password'>
                  <button>
                    <a>Edit profile</a>
                  </button>
                </Link>

                <Link to='/Changepass' className='customer-password-1'>
                  <button>
                    <a>Change password</a>
                  </button>
                </Link>
              </div>
            </div>
            <div className='customer-avatar'>
              <Avatar
                src={`http://localhost:4000/${user.image}`}
                style={{ height: '10vh', width: '7vw' }}
              />
              <input
                type='file'
                className='newProduct__input'
                id='image'
                name='image'
                placeholder='Choose the image'
                accept='.jpg,.png,.jpeg'
                onChange={handleImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
