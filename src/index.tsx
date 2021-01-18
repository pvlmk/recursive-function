import * as React from "react";

import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/styles/index.scss";

import App from "./components/App/App";
import store from "./store/store";

const root = document.getElementById("root");

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  root
);
