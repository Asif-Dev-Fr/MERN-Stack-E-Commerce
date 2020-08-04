import { CART_ADD_ITEM } from '../constants/cartConstants';

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
        default:
            return state

    }
}

export { cartReducer };