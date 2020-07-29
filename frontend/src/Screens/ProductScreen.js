import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const ProductScreen = ({match}) => {
    //  console.log(match.params.id);
    const product = data.products.find(value => value._id === match.params.id);
    console.log(product);
    return (
        <div className="product-page">
            <div className="back-to-result">
                <div><Link to="/">Back to results</Link></div>
            </div>
            <div className="details">

                <section className="details-image">
                    <img src={product.image}  alt={product.name} /> 
                </section>

                <section className="details-infos">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numberReviews} Reviews)
                        </li>
                        <li>
                            Price : <b>{product.price}€</b>
                        </li>
                        <li>
                            Description : 
                            <p>
                                {product.description}
                            </p>
                        </li>
                    </ul>
                </section>

                <section className="details-action">
                    <ul>
                        <li>
                            Price : {product.price}
                        </li>
                        <li>
                            Status : {product.status}
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

                
            </div>
    
         </div>
    )
        
}

export default ProductScreen;