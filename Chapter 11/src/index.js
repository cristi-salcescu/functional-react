import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";

import api from "./api/productsAPI";
import ProductStore from "./stores/ProductStore";
import ShoppingCartStore from "./stores/ShoppingCartStore";

const shoppingStore = ShoppingCartStore();
const productStore = ProductStore(api);

const stores = {
    productStore,
    shoppingStore
};

ReactDOM.render(<Provider {...stores}><App /></Provider>, 
    document.getElementById("root"));

productStore.fetchProducts();    