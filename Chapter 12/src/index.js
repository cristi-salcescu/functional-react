import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import rootReducer from "./reducers";
import { fetchProducts } from "./async/productsThunks";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));


