import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./Contexts/User/UserProvider.jsx";
import TodoProvider from "./Contexts/Todo/TodoProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <TodoProvider>
      <Router>
        <App />
      </Router>
    </TodoProvider>
  </UserProvider>
);
