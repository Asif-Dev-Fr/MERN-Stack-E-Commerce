import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    productList : productListReducer, 
    productDetails : productDetailsReducer
});
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;