import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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

ReactDOM.render(<App products={products} />, document.getElementById('root'));