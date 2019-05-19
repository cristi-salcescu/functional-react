import React from "react";
import "./App.css";

import Header from "./Header";
import ProductSearch from "./containers/ProductSearchContainer";
import ProductList from "./containers/ProductListContainer";
import ShoppingCart from "./containers/ShoppingCartContainer";

export default function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <ProductSearch></ProductSearch>
          <ProductList></ProductList>
        </div>
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
}
