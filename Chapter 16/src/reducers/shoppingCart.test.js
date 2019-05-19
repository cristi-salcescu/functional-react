import { Map } from "immutable";
import { addToCart, removeFromCart } from "../actions/shoppingCartActions";
import { toCartView } from "./shoppingCart";
import shoppingCartReducer from "./shoppingCart";

test("shoppingCart() can add products", function() {
  //arrange
  const cartMap = Map();

  //act
  const addToCartAction = addToCart({id:1, title: "apple", price: 10});
  const newCartMap = shoppingCartReducer(cartMap, addToCartAction);
 
  //assert
  const cart = toCartView(newCartMap);
  expect(cart.list.length).toEqual(1);
});


test("shoppingCart() can increment quantity", function() {
  //arrange
  let cartMap = Map();
  cartMap = shoppingCartReducer(cartMap, addToCart({id:1, title: "apple", price: 10}));
  cartMap = shoppingCartReducer(cartMap, addToCart({id:2, title: "mango", price: 5}));

  //act
  const addToCartAction = addToCart({id:1, title: "apple", price: 10});
  const newCartMap = shoppingCartReducer(cartMap, addToCartAction);
 
  //assert
  const cart = toCartView(newCartMap);
  expect(cart.list.length).toEqual(2);
  expect(cart.list[0].quantity).toEqual(2);
});

test("shoppingCart() can remove product", function() {
  //arrange
  let cartMap = Map();
  cartMap = shoppingCartReducer(cartMap, addToCart({id:1, title: "apple", price: 10}));
  cartMap = shoppingCartReducer(cartMap, addToCart({id:2, title: "mango", price: 5}));

  //act
  const removeFromCartAction = removeFromCart({id:1, title: "apple", price: 10});
  const newCartMap = shoppingCartReducer(cartMap, removeFromCartAction);
 
  //assert
  const cart = toCartView(newCartMap);
  expect(cart.list.length).toEqual(1);
  expect(cart.list[0].id).toEqual(2);
});

test("toCartView() can compute total price", function() {
  //arrange
  let cartMap = Map();
  cartMap = shoppingCartReducer(cartMap, addToCart({id:1, title: "apple", price: 10}));
  cartMap = shoppingCartReducer(cartMap, addToCart({id:2, title: "mango", price: 5}));

  //act
  const cart = toCartView(cartMap);
 
  //assert
  expect(cart.total).toEqual(15);
});