import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserGlobal from "./UserGlobal";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./components/redux/store";
import Axios from "axios";
Axios.defaults.baseURL =
  process.env.BACKENDURL || "your heroku dot com goes here";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UserGlobal />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
