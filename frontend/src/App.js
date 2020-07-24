import React from 'react';
import './App.css';

const App = () => {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  } 

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
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
          <ul className="products">

            <li>
              <div className="product">
                <img src="pictures/Luffy.jpg" alt="product" />
                <div className="product-name"><a href="product.html">Luffy Tshirt</a></div>
                <div className="product-brand">One Piece</div>
                <div className="product-price">60€</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img src="pictures/Luffy.jpg" alt="product" />
                <div className="product-name"><a href="product.html">HTML Course</a></div>
                <div className="product-brand">Brand</div>
                <div className="product-price">60€</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img src="pictures/Luffy.jpg" alt="product" />
                <div className="product-name"><a href="product.html">HTML Course</a></div>
                <div className="product-brand">Brand</div>
                <div className="product-price">60€</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img src="pictures/Luffy.jpg" alt="product" />
                <div className="product-name"><a href="product.html">HTML Course</a></div>
                <div className="product-brand">Brand</div>
                <div className="product-price">60€</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img src="pictures/Luffy.jpg" alt="product" />
                <div className="product-name"><a href="product.html">HTML Course</a></div>
                <div className="product-brand">Brand</div>
                <div className="product-price">60€</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img src="pictures/Luffy.jpg" alt="product" />
                <div className="product-name"><a href="product.html">HTML Course</a></div>
                <div className="product-brand">Brand</div>
                <div className="product-price">60€</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img src="pictures/Luffy.jpg" alt="product" />
                <div className="product-name"><a href="product.html">HTML Course</a></div>
                <div className="product-brand">Brand</div>
                <div className="product-price">60€</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

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
  );
}

export default App;