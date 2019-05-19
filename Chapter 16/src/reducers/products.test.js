import { resetProducts } from "../actions/productsActions";
import productsReducer from "./products";

test("products() can reset all products", function() {
  //arrange
  const products = [];
  const newProducts = [
    {id:1, title: "apple", price: 10},
    {id:2, title: "mango", price: 5}
  ];

  //act
  const resetProductsAction = resetProducts(newProducts);
  const result = productsReducer(products, resetProductsAction);

  //assert
  expect(Array.from(result)).toEqual(newProducts);
});
