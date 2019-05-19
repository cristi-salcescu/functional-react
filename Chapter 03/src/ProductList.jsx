import React from "react";
import ProductItem from "./ProductItem";

function renderProductItem(product) {
  return (
    <ProductItem
      product={product}
      key={product.id}
    />
  );
}

export default function ProductList({products}) {
  return (
    <div>
      {products.map(renderProductItem)}
    </div>
  );
}