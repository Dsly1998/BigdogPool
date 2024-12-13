import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App"; // Fixed path
import reportWebVitals from "../src/reportWebVitals"; // Optional

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app
reportWebVitals(console.log); // Or remove this if not needed
