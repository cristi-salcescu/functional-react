import { createStore } from "redux";

import { setQuery } from "../actions/queryActions";
import rootReducer from "./index";

test("Store can set query", function() {
  //arrange
  const store = createStore(rootReducer);

  //act
  const query = { text : "apple"};
  store.dispatch(setQuery(query));
 
  //assert
  const ui = store.getState().ui;
  expect(ui.query).toEqual(query);
});