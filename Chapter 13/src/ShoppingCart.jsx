import React from "react";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingCart.css";

export default function ShoppingCart({cart, onRemoveClick}) {
  function renderShoppingItem(product) {
    return (
      <ShoppingItem
        product={product}
        key={product.id}
        onRemoveClick={onRemoveClick}
      />
    );
  }

  return (
    <div className="shopping-cart">
      <div>{cart.list.map(renderShoppingItem)}</div>
      <div className="shopping-cart-total">Total: {cart.total}</div>
    </div>
  );
}