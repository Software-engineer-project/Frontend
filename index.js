import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import LoginPage from "./login/loginpage";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoginPage />
  </React.StrictMode>,
  document.getElementById("root")
);
