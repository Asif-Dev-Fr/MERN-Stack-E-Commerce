import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../action/cartActions';

const CartScreen = ({match, location}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = match.params.id;
    // To find the quantity, we split after the = signe (for example : 001?qty=4 which means product id 001 with 4 quantities)
    const quantity = location.search ? Number(location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

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
                    cartItems.lenght === 0 ? 
                    <div>Cart is empty</div> : 
                    cartItems.map(item => 
                        <li key={item._id}>
                            <div className="cart-image">
                                <img alt={item.name} src={item.image} /> 
                            </div>   

                            <div className="cart-name">
                                <div>{item.name}</div>
                                <div>
                                    Quantity :
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="cart-price">
                                {item.price}
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