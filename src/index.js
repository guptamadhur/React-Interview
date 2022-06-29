import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./client/routes/AppRoute";
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
