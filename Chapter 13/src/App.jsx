import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import Header from "./Header";
import ProductSearch from "./ProductSearch";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

//pure
function isInQuery(query){
  return function(product){
    return product.name.includes(query.text); 
  };
}

export default function App({products, shoppingCartStore}) {
  const [cart, setCart] = useState({list: []});
  const [filteredProducts, setProducts] = useState(products);  

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

  function searchProducts(query){
    const filteredProducts = products.filter(isInQuery(query));
    setProducts(filteredProducts);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <ProductSearch onSearch={searchProducts} />
          <ProductList products={filteredProducts} onAddClick={shoppingCartStore.addToCart}></ProductList>
        </div>
        <ShoppingCart cart={cart} onRemoveClick={shoppingCartStore.removeFromCart}></ShoppingCart>
      </div>
    </div>
  );
}