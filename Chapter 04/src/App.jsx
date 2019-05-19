import React from "react";

import Header from "./Header";
import ProductList from "./ProductList";

export default function App({products}) {
  function addToCart(product) {
    console.log(product);
  }

  return (
    <div>
      <Header />
      <div>
        <ProductList products={products} onAddClick={addToCart}></ProductList>
      </div>
    </div>
  );
}
