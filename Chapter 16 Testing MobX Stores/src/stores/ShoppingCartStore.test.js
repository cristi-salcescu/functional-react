import ShoppingCartStore from "./ShoppingCartStore";

test("ShoppingCartStore can add products", function() {
  //arrange
  const store = ShoppingCartStore();

  //act
  store.addToCart({id:1, title: "apple", price: 10});
  store.addToCart({id:2, title: "mango", price: 5});
 
  //assert
  const cart = store.toCartView();
  expect(cart.list.length).toEqual(2);
});

test("ShoppingCartStore can increment quantity", function() {
  //arrange
  const store = ShoppingCartStore();
  store.addToCart({id:1, title: "apple", price: 10});
  store.addToCart({id:2, title: "mango", price: 5});

  //act
  store.addToCart({id:1, title: "apple", price: 10});
 
  //assert
  const cart = store.toCartView();
  expect(cart.list.length).toEqual(2);
  expect(cart.list[0].quantity).toEqual(2);
});

test("ShoppingCartStore can compute total", function() {
  //arrange
  const store = ShoppingCartStore();
  store.addToCart({id:1, title: "apple", price: 10});
  store.addToCart({id:2, title: "mango", price: 5});

  //act
  const cart = store.toCartView();
 
  //assert
  expect(cart.total).toEqual(15);
});

test("ShoppingCartStore can remove product", function() {
  //arrange
  const store = ShoppingCartStore();
  store.addToCart({id:1, title: "apple", price: 10});
  store.addToCart({id:2, title: "mango", price: 5});

  //act
  store.removeFromCart({id:1, title: "apple", price: 10});
 
  //assert
  const cart = store.toCartView();
  expect(cart.list.length).toEqual(1);
  expect(cart.list[0].id).toEqual(2);
});
