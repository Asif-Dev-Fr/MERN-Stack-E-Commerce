import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../action/productAction';

const ProductScreen = ({match, history}) => {
     
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state =>state.productDetails);
    const {productDetailsFromRedux, loading, error} = productDetails
    const dispatch = useDispatch();
    const productId = match.params.id;

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const handleAddToCart = () => {
        history.push("/cart/" + productId + '?qty=' + qty);
    }

    return (
        <div className="product-page">
            <div className="back-to-result">
                <div><Link to="/">Back to results</Link></div>
            </div>
            {loading ? <div>Loading ...</div>:
            error ? <div>{error}</div> : 
            (<div className="details">

                <section className="details-image">
                    <img src={productDetailsFromRedux.image}  alt={productDetailsFromRedux.name} /> 
                </section>

                <section className="details-infos">
                    <ul>
                        <li>
                            <h4>{productDetailsFromRedux.name}</h4>
                        </li>
                        <li>
                            {productDetailsFromRedux.rating} Stars ({productDetailsFromRedux.numberReviews} Reviews)
                        </li>
                        <li>
                            Price : <b>{productDetailsFromRedux.price}€</b>
                        </li>
                        <li>
                            Description : 
                            <p>
                                {productDetailsFromRedux.description}
                            </p>
                        </li>
                    </ul>
                </section>

                <section className="details-action">
                    <ul>
                        <li>
                            Price : {productDetailsFromRedux.price}
                        </li>
                        <li>
                            Status : {productDetailsFromRedux.countInStock > 0 ? 'In Stock' : 'Unavailable !'}
                        </li>
                        <li>
                            Quantity : <select value={qty} onChange={(event) => {setQty(event.target.value)}}>
                                {[...Array(productDetailsFromRedux.countInStock).keys()].map((quantity) => 
                                    <option value={quantity + 1} key={quantity + 1} >{quantity + 1}</option>
                                )}
                            </select>
                        </li>
                        <li>
                            {productDetailsFromRedux.countInStock > 0 ? 
                            <button className="buttonAddToCart" onClick={handleAddToCart}>Add to the shoplist</button> : 
                            <button className="buttonAddToCart" disabled>Out of stock !</button>
                            }
                            
                        </li>
                    </ul>
                    
                </section>

                
            </div>)
            }
    
         </div>
    )
        
}

export default ProductScreen;