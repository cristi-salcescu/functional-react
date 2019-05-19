import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShoppingCartStore from "./stores/ShoppingCartStore";

const shoppingCartStore = ShoppingCartStore();

function toJson(response){
    return response.json();
} 

function render(products){
    ReactDOM.render(<App products={products} shoppingCartStore={shoppingCartStore} />, document.getElementById('root'));
}

fetch("/products.json")
    .then(toJson)
    .then(render);
