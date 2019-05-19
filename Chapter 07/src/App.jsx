import React from "react";
import { useState } from "react";
import partial from "lodash/partial";
import "./App.css";

import Header from "./Header";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

export default function App({products}) {
  const [shoppingMap, setShoppingMap] = useState(Object.create(null));

  function addToCart(product) {
    const addToMap = partial(addProductToMap, product);
    setShoppingMap(addToMap);
  }

  function removeFromCart(product) {
    const removeFromMap = partial(removeProductFromMap, product);
    setShoppingMap(removeFromMap);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList products={products} onAddClick={addToCart}></ProductList>
        <ShoppingCart cart={toCartView(shoppingMap)} onRemoveClick={removeFromCart}></ShoppingCart>
      </div>
    </div>
  );
}

//pure
function addProductToMap(product, shoppingMap){
  const newShoppingMap = { ...shoppingMap };
  newShoppingMap[product.id] = incrementProductQuantity(product, shoppingMap);
  return Object.freeze(newShoppingMap);
}

function removeProductFromMap(product, shoppingMap){
  const newShoppingMap = { ...shoppingMap };
  delete newShoppingMap[product.id];
  return Object.freeze(newShoppingMap);
}

function incrementProductQuantity(product, shoppingMap) {
  const quantity = getProductQuantity(product, shoppingMap) + 1;
  return Object.freeze({ ...product, quantity });
}

function getProductQuantity(product, shoppingMap) {
  const existingProduct = shoppingMap[product.id];
  if (existingProduct) {
    return existingProduct.quantity;
  }

  return 0;
}

function toCartView(shoppingMap) {
  const shoppingList = Object.values(shoppingMap);
  return Object.freeze({
    list: shoppingList,
    total: shoppingList.reduce(addPrice, 0)
  });
}

function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}
