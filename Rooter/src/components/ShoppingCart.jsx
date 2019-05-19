import React from "react";
import { Link } from "react-router-dom";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingCart.css";

export default function ShoppingCart({cart, onRemoveClick, checkout = true}) {
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
      { checkout === true && (
        <div className="shopping-cart-checkout"><Link to="/checkout"><button className="navigation-button">Checkout</button></Link></div>
      )}
    </div>
  );
}