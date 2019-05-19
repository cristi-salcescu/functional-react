import React from "react";
import partial from "lodash/partial";
import "./ProductItem.css";

export default function ProductItem({product, onAddClick}) {
  return (
    <div className="product-list-item">
      <div>{product.name}</div>
      <div><button type="button" onClick={partial(onAddClick, product)}>Add</button></div>
    </div>
  );
}