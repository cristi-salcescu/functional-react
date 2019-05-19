import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";

import api from "./api/productsAPI";
import ProductStore from "./stores/ProductStore";
import ShoppingCartStore from "./stores/ShoppingCartStore";
import UIStore from "./stores/UIStore";

const shoppingStore = ShoppingCartStore();
const productStore = ProductStore(api);
const uiStore = UIStore();
const stores = {
    productStore,
    shoppingStore,
    uiStore
};

ReactDOM.render(<Provider {...stores}><App /></Provider>, 
    document.getElementById("root"));

productStore.fetchProducts();    