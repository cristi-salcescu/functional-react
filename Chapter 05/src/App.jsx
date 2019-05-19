import React from "react";

import Header from "./Header";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

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
      <div>
        <ProductList products={products} onAddClick={addToCart}></ProductList>
        <ShoppingCart cart={cart} onRemoveClick={removeFromCart}></ShoppingCart>
      </div>
    </div>
  );
}
