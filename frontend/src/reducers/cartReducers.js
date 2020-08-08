import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const cartReducer = (state={cartItems:[]}, action) => {

    switch(action.type) {
        case CART_ADD_ITEM : 
            const item = action.payload;
            const findProduct = state.cartItems.find(value => value.product === item.product);
            if (findProduct) {
                return {cartItems : 
                        state.cartItems.map(value=> value.findProduct === findProduct.product ? item : value
                    )};
            }
            return {cartItems: [...state.cartItems, item]};
        case CART_REMOVE_ITEM :
            return {cartItems : state.cartItems.filter(value => value.product !== action.payload)}
        default:
            return state

    }
}

export { cartReducer };