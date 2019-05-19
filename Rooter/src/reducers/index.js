import { combineReducers } from "redux";
import shoppingCart from "./shoppingCart";
import products from "./products";
import ui from "./ui";

export default combineReducers({
    shoppingCart,
    products,
    ui
});