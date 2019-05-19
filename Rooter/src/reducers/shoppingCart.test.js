import { createStore } from "redux";

import { addToCart, removeFromCart } from "../actions/shoppingCartActions";
import { toCartView } from "./shoppingCart";
import rootReducer from "./index";

function getCart({shoppingCart}){
  return toCartView(shoppingCart);
}

test("ShoppingCart can add products", function() {
  //arrange
  const store = createStore(rootReducer);

  //act
  store.dispatch(addToCart({id:1, title: "apple", price: 10}));
  store.dispatch(addToCart({id:2, title: "mango", price: 5}));
 
  //assert
  const cart = getCart(store.getState());
  expect(cart.list.length).toEqual(2);
});

test("ShoppingCart can increment quantity", function() {
  //arrange
  const store = createStore(rootReducer);
  store.dispatch(addToCart({id:1, title: "apple", price: 10}));
  store.dispatch(addToCart({id:2, title: "mango", price: 5}));

  //act
  store.dispatch(addToCart({id:1, title: "apple", price: 10}));
 
  //assert
  const cart = getCart(store.getState());
  expect(cart.list.length).toEqual(2);
  expect(cart.list[0].quantity).toEqual(2);
});

test("ShoppingCart can compute total", function() {
  //arrange
  const store = createStore(rootReducer);
  store.dispatch(addToCart({id:1, title: "apple", price: 10}));
  store.dispatch(addToCart({id:2, title: "mango", price: 5}));

  //act
  const cart = getCart(store.getState());
 
  //assert
  expect(cart.total).toEqual(15);
});

test("ShoppingCart can remove product", function() {
  //arrange
  const store = createStore(rootReducer);
  store.dispatch(addToCart({id:1, title: "apple", price: 10}));
  store.dispatch(addToCart({id:2, title: "mango", price: 5}));

  //act
  store.dispatch(removeFromCart({id:1, title: "apple", price: 10}));
 
  //assert
  const cart = getCart(store.getState());
  expect(cart.list.length).toEqual(1);
  expect(cart.list[0].id).toEqual(2);
});
