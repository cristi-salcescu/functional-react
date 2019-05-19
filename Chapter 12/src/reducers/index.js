import { combineReducers } from "redux";
import shoppingCart from "./shoppingCart";
import products from "./products";

export default combineReducers({
    shoppingCart,
    products
});