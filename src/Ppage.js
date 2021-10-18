import React, { useEffect, useState } from 'react';
import './Ppage.css';
import { useStateValue } from './StateProvider/StateProvider';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getProduct } from './API/product';
import { addCart } from './API/cart';
import { addWish } from './API/wishlist';

function Ppage() {
  const [state, dispatch] = useStateValue();
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [selectedID, setSelectedID] = useState('');
  const [name, setName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const user = JSON.parse(sessionStorage.getItem('jwt'));

  useEffect(() => {
    getProduct().then((response) => {
      if (response.success) {
        console.log(response.products);
        setAllProducts(response.products);
      } else {
        alert(response.message);
      }
    });
  }, []);

  let filteredProducts = allProducts.filter(
    (oneproduct) => oneproduct.category === category
  );
  const addToCart = () => {
    let body = {
      products: {
        productId: selectedID,
        quantity: quantity,
        image: selectedImage,
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
  const addToWish = () => {
    let body = {
      userId: user._id,
      products: {
        productId: selectedID,
        image: selectedImage,
        productName: name,
      },
    };
    addWish(body).then((response) => {
      alert(response.message);
    });
  };
  return (
    <div className='ppage'>
      <div className='ppage-corner'>Home / Categories / {category}</div>
      <div className='ppage-header'> {category}</div>
      <div className='ppage-cards'>
        <div className='ppage-map'>
          {filteredProducts.map((product) => (
            <div
              className='ppage-filter'
              onClick={() => {
                setSelectedID(product._id);
                setSelectedImage(product.image);
                setName(product.productName);
              }}>
              <div className='ppage-imagediv'>
                <img
                  className='ppage-img'
                  src={`http://localhost:4000/${product.image}`}
                />
              </div>
              <div className='ppage-left'>
                <div className='ppage-two'>
                  <div className='ppage-text'>{product.productName}</div>
                  <div className='ppage-taka'>TK {product.price}</div>
                  <div className='ppage-rating'>
                    &#11088;&#11088;&#11088;&#11088;&#11088;
                  </div>
                  <div className='ppage-desc'>{product.description}</div>
                </div>
                <div className='ppage-three'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '5vw',
                      marginLeft: '8vw',
                    }}>
                    <label className='ppage-btn-btn'>Change quantity</label>
                    <input
                      type='number'
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                  </div>
                  <Link className='ppage-btn-1'>
                    <button className='ppage-btn-btn' onClick={addToCart}>
                      <a className='ppage-btn-btn'>Add to Cart</a>
                    </button>
                  </Link>
                  <Link className='ppage-btn-2'>
                    <button
                      className='ppage-btn-btn'
                      onClick={() => {
                        setSelectedID(product._id);
                        setSelectedImage(product.image);
                        setName(product.productName);
                        addToWish();
                      }}>
                      <a className='ppage-btn-btn'>Add to wishlist</a>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ppage;
