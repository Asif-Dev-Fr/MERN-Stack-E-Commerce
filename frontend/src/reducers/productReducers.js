import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL  } from '../constants/productConstants';

function productListReducer(state = {productsFromRedux: []}, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST : 
            return {loading : true};
        break;
        case PRODUCT_LIST_SUCCESS :
            return {loading: false, productsFromRedux : action.payload};
        break;
        case PRODUCT_LIST_FAIL : 
            return {loading: false, error : action.payload};
        break;

        default:
            return state;
    }
}

export {productListReducer};