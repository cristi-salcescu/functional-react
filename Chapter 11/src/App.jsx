import React from "react";
import "./App.css";

import Header from "./Header";
import ProductList from "./containers/ProductListContainer";
import ShoppingCart from "./containers/ShoppingCartContainer";

export default function App({products, cart}) {
  return (
    <div>
      <Header />
      <div className="content">
        <ProductList></ProductList>
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
}