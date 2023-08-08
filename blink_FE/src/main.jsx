import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <Reset />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
