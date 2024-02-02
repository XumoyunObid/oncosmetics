import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./main.css";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";




ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>
);
