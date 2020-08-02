import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../action/productAction';

const HomeScreen = (props) => {
    const resultList = useSelector(state => state.productList);  
    const { productsFromRedux, loading, error } = resultList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return loading ? <div>Loading...</div> :
    error? <div>{error}</div> :
    <ul className="products">
            {
            productsFromRedux.map(product=> 
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
                    <div className="product-rating">{product.rating} stars ({product.numberReviews} Reviews)</div>
                </div>
            </li>) 
            }       
        </ul>
}

export default HomeScreen;