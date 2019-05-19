import React from "react";

import Header from "./Header";
import ProductList from "./ProductList";

export default function App({products}) {
  return (
    <div>
      <Header />
      <div>
        <ProductList products={products}></ProductList>
      </div>
    </div>
  );
}
