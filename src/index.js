import React from "react";
import App from "./App";
import { store } from "./store/index";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
