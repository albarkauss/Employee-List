import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import css style file for the components
import "./styles/components.css";

// synchronize the UI with the URL
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
