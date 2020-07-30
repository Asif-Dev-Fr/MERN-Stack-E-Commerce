import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

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
            <Link to="/">MERN Stack Project : E-Commerce</Link>
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
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
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
