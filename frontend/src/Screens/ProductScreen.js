import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../action/productAction';

const ProductScreen = ({match}) => {

    const productDetails = useSelector(state =>state.productDetails);
    const {productDetailsFromRedux, loading, error} = productDetails
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(match.params.id));
    }, [dispatch])

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
                            Status : {productDetailsFromRedux.status}
                        </li>
                        <li>
                            Quantity : <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li>
                            <button className="buttonAddToCart">Add to the shoplist</button>
                        </li>
                    </ul>
                    
                </section>

                
            </div>)
            };
    
         </div>
    )
        
}

export default ProductScreen;