import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import rootReducer from "./reducers";

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

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App products={products} /></Provider>, document.getElementById('root'));


    



