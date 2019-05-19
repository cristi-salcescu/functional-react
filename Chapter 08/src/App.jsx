import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import ShoppingCart from "./ShoppingCart";

import Header from "./Header";
import ProductList from "./ProductList";

export default function App({products, shoppingCartStore}) {
  const [cart, setCart] = useState({list: []});

  useEffect(subscribeToStore, []);

  function subscribeToStore() {
    shoppingCartStore.onChange(reload);

    return function cleanup(){
      shoppingCartStore.offChange();
    };
  }

  function reload() {
    const cart = shoppingCartStore.get();
    setCart(cart);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList products={products} onAddClick={shoppingCartStore.addToCart}></ProductList>
        <ShoppingCart cart={cart} onRemoveClick={shoppingCartStore.removeFromCart}></ShoppingCart>
      </div>
    </div>
  );
}
