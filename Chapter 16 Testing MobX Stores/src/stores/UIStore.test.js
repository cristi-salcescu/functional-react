import UIStore from "./UIStore";

test("UIStore can set the query", function() {
  //arrange
  const store = UIStore();

  //act
  const newQuery = { text : "apple"};
  store.setQuery(newQuery);
 
  //assert
  const query = store.getQuery();
  expect(query).toEqual(newQuery);
});
