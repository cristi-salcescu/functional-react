import { setQuery } from "../actions/queryActions";
import uiReducer from "./ui";

test("ui() can set query", function() {
  //arrange
  const query = { text: "" };
  const newQuery = { text : "apple"};

  //act
  const queryAction = setQuery(newQuery);
  const ui = uiReducer(newQuery, queryAction);
  
  //assert
  expect(ui.query).toEqual(newQuery);
});