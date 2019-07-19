import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import rootReducer from "./rootReducer";

import * as serviceWorker from "./serviceWorker";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
