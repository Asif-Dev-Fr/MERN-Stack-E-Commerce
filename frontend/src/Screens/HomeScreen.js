import React from 'react';
import data from '../data'
import { Link } from 'react-router-dom';

const HomeScreen = (props) => {
    return <ul className="products">
            {
            data.products.map(product=> 
            <li key={product._id}>
                <div className="product">
                    <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                    <div className="product-name">
                        <Link to={`/product/${product._id}`}>
                            {product.name}
                        </Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}€</div>
                    <div className="product-rating">{product.rating} stars ({product.numberReviews})</div>
                </div>
            </li>) 
            }       
        </ul>
}

export default HomeScreen;