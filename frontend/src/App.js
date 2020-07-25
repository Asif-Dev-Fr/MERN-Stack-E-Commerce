import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

const App = () => {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  } 

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <BrowserRouter>
      <div className="container">

        <header>
          <div className="title">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <a href="index.html">MERN Stack Project : E-Commerce</a>
          </div>
          <div className="log_cart">
            <a href="cart.html"> Cart </a>
            <a href="signing.html"> Log </a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="index.html">T-shirt</a>
            </li>
            <li>
              <a href="index.html">Pants</a>
            </li>
          </ul>
        </aside>

        <main>
          <div className="products-container">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <ul className="products">
              {
                data.products.map(product=> 
                <li>
                  <div className="product">
                    <img src={product.image} alt={product.name} />
                    <div className="product-name"><a href="product.html">{product.name}</a></div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}€</div>
                    <div className="product-rating">{product.rating} stars ({product.numberReviews})</div>
                  </div>
                </li>) 
              }       
            </ul>
          </div>
        </main>

        <footer>
          <p>
            MERN Stack Project : E-Commerce <br />
            Created by Kassam Ali Asif
          </p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
