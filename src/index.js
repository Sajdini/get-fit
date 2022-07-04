import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "./context/http-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
);
