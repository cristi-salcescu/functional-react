import React from 'react';
import "./App.css"

import Header from '../Header';
import ProductSearch from "./ProductSearchContainer";
import ProductList from './ProductListContainer';
import ShoppingCart from "../components/ShoppingCartContainer";

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
