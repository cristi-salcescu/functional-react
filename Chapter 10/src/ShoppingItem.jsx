import React from "react";
import partial from "lodash/partial";
import "./ShoppingItem.css";

export default function ShoppingItem({product, onRemoveClick}) {
  return (
    <div className="shopping-cart-item">
        <div>{product.name}</div>
        <div>{product.quantity}</div>
        <div>
          <button type="button" onClick={partial(onRemoveClick, product)}>
          Remove
          </button>
        </div>
    </div>
  );
}