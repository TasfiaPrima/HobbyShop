import React, { useState } from 'react';
import './Addproduct.css';
import {createProduct} from "./API/product"

function Addproduct() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [file, setFile] = useState();

  const submit = () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('seller', user._id);
    formData.append('productName', productName);
    formData.append('description', description);
    console.log(formData);
    createProduct(formData).then((response) => {
      console.log(response);
      if (response.success) {
        alert(response.message);
        setCategory('');
        setFile('');
        setDescription('');
        setPrice(0);
        setProductName('');
      } else alert(response.message);
    });
  };
  const handleImage = async (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  };
  return (
    <div className='Addproduct'>
      <div className='Addproduct-right-middle'>
        <div className='Addproduct-right-textarea'>
          <div className='Addproduct-Info'>Product name : </div>
          <input
            placeholder='Enter your first name'
            className='Addproduct-current'
            value={productName}
           onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div className='Addproduct-right-textarea'>
          <div className='Addproduct-Info'>Product Category : </div>
          <input
            placeholder='Enter your last name'
            className='Addproduct-current'
            value={category}
           onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div className='Addproduct-right-textarea'>
          <div className='Addproduct-Info'>Price : </div>
          <input
            type='number'
            placeholder='Enter your email'
            className='Addproduct-current'
            value={price}
           onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className='Addproduct-right-textarea'>
          <div className='Addproduct-Info'>Description: </div>
          <textarea
            placeholder='Enter your description'
            row='3'
            className='Addproduct-input'
            value={description}
           onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <input
          type='file'
          className='newProduct__input'
          id='image'
          name='image'
          placeholder='Choose the image'
          accept='.jpg,.png,.jpeg'
          onChange={handleImage}
        />
        <div className='Addproduct-right-lower'>
          <div className='Addproduct-btn-1'>
            <button onClick={submit}>
              <a>Add Product</a>
            </button>
          </div>
          <div className='Addproduct-btn-2'>
            <button>
              <a>Cancel</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
