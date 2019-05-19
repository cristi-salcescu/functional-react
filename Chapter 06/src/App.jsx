import React from "react";
import "./App.css"

import Header from "./Header";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

export default function App({products}) {
  const cart = { list: products };

  function addToCart(product) {
    console.log(`add ${product.id}`);
  }

  function removeFromCart(product) {
    console.log(`remove ${product.id}`);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList products={products} onAddClick={addToCart}></ProductList>
        <ShoppingCart cart={cart} onRemoveClick={removeFromCart}></ShoppingCart>
      </div>
    </div>
  );
}
