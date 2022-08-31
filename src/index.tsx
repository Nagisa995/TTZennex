import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import "./css/zeroStyle.css"
import { App } from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
