import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

const globalState = {
  totalOrder: null,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  return state;
};

// Store
const storeRedux = createStore(rootReducer);

ReactDOM.render(<Provider store={storeRedux}><App /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
