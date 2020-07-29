import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = (props) => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get('/api/products');
            console.log(data);
            setResults(data.data)
        }
        fetchData()
    }, []);

    return <ul className="products">
            {
            results.map(product=> 
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