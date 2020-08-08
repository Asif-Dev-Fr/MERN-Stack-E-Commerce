import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../action/cartActions';

const CartScreen = ({match, location}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = match.params.id;
    // To find the quantity, we split after the = signe (for example : 001?qty=4 which means product id 001 with 4 quantities)
    const quantity = location.search ? Number(location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    // Remove from Cart button : 
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, quantity));
        }
    }, [dispatch, productId, quantity]);

    return <div className='cart'>
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                {
                    cartItems.length === 0 ? 
                    <div>Cart is empty</div> : 
                    cartItems.map(item => 
                        <li key={item.product}>
                            <div className="cart-image">
                                <img alt={item.name} src={item.image} /> 
                            </div>   

                            <div className="cart-name">
                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                <div>
                                    Quantity : 
                                    <select value={item.quantity} onChange={(event) => addToCart(item.product, event.target.value)}>
                                        {[...Array(item.countInStock).keys()].map(qty =>
                                            <option key={qty + 1} value={qty + 1}> {qty + 1} </option>
                                        )}
                                    </select>
                                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="cart-price">
                                {item.price}€
                            </div>

                        </li>
                    )
                }
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items) :
                $ {cartItems.reduce((a,c) => a + c.price * c.quantity, 0)}
            </h3>
            <button className="button primary" disabled={cartItems.lenght === 0}>
                Proceed to Checkout
            </button>
        </div>
    </div>
}

export default CartScreen;