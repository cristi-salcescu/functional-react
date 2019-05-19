import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShoppingCartStore from "./ShoppingCartStore";

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

const shoppingCartStore = ShoppingCartStore();

ReactDOM.render(<App products={products} shoppingCartStore={shoppingCartStore} />, document.getElementById('root'));