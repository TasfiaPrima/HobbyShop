import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useStateValue } from './StateProvider/StateProvider';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Customer from './Customer.js';
import Footer from './Footer.js';
import Register from './Register.js';
import Signin from './Signin.js';
import Aboutus from './Aboutus.js';
import NotiPage from './NotiPage.js';
import Inproduct from './Inproduct.js';
import Basket from './Basket.js';
import Ppage from './Ppage.js';
import Checkout from './Checkout.js';
import Search from './Search.js';
import Wishlist from './Wishlist.js';
import Editprofile from './Editprofile';
import Addproduct from './Addproduct';
import Rating from './Rating';
import Myorder from './Myorder';
import Changepass from './Changepass';

function App() {
  const [state, dispatch] = useStateValue();
  return (
    <Router>
      <Switch>
        <Route path='/Register'>
          <Register />
        </Route>
        <Route path='/Signin'>
          <Signin />
        </Route>
        <Route path='/Aboutus'>
          <Navbar />
          <Aboutus />
          <Footer />
        </Route>
        <Route path='/NotiPage'>
          <Navbar />
          <NotiPage />
          <Footer />
        </Route>
        <Route path='/customer'>
          <Navbar />
          <Customer />
          <Footer />
        </Route>
        <Route path='/basket'>
          <Navbar />
          <Basket />
          <Footer />
        </Route>
        <Route path='/ppage/:category'>
          <Navbar />
          <Ppage />
          <Footer />
        </Route>
        <Route path='/Products/:category'>
          <Navbar />
          <Inproduct />
          <Footer />
        </Route>
        <Route path='/Checkout'>
          <Navbar />
          <Checkout />
          <Footer />
        </Route>
        <Route path='/Search/:search'>
          <Navbar />
          <Search />
          <Footer />
        </Route>
        <Route path='/Wishlist'>
          <Navbar />
          <Wishlist />
          <Footer />
        </Route>
        <Route path='/Editprofile'>
          <Navbar />
          <Editprofile />
          <Footer />
        </Route>
        <Route path='/Addproduct'>
          <Navbar />
          <Addproduct />
          <Footer />
        </Route>
        <Route path='/Rating'>
          <Navbar />
          <Rating />
          <Footer />
        </Route>
        <Route path='/Myorder'>
          <Navbar />
          <Myorder />
          <Footer />
        </Route>
        <Route path='/Changepass'>
          <Navbar />
          <Changepass />
          <Footer />
        </Route>
        <Route path='/'>
          <div className='App'>
            <Navbar />
            <h4 className='catagories'>Categories</h4>
            <div className='catagories-image'>
              {state.product.map((product) => (
                <Card
                  title={product.title}
                  imageUrl={product.imageUrl}
                  body={product.body}
                />
              ))}
            </div>
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
