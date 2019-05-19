import { createStore } from "redux";

import { resetProducts } from "../actions/productsActions";
import rootReducer from "./index";

test("Store can reset all products", function() {
  //arrange
  const store = createStore(rootReducer);

  //act
  const newProducts = [
    {id:1, title: "apple", price: 10},
    {id:2, title: "mango", price: 5}
  ];
  store.dispatch(resetProducts(newProducts));
 
  //assert
  const products = store.getState().products;
  expect(products.sizeq).toEqual(2);
});
