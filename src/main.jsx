import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContext, value } from "./AuthContext/AuthContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext.Provider value={value}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>
);
