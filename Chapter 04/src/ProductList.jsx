import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({products, onAddClick}) {
  function renderProductItem(product) {
    return (
      <ProductItem
        product={product}
        key={product.id}
        onAddClick={onAddClick}
      />
    );
  }

  return (
    <div>
      <div>{products.map(renderProductItem)}</div>
    </div>
  );
}