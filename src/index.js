import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Esto lo agrego Leo ( Para no renderizar on Strict Mode)
import { Provider } from "react-redux";
import { store } from "./store/store";

import './index.css';
import App from "./App";

ReactDOM.render(
  <Provider store = { store }>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
