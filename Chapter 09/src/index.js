import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import ShoppingCartStore from "./stores/ShoppingCartStore";

const products = [
    {
        "id" : 1,
        "name" : "mango",
        "price" : 10
    },
    {
        "id" : 2,
        "name" : "apple",
        "price": 5
    }];

const shoppingStore = ShoppingCartStore();

ReactDOM.render(<Provider shoppingStore={shoppingStore}><App products={products} /></Provider>, document.getElementById("root"));



    



