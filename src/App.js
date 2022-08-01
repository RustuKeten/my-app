import "./App.css";
import React from "react";
import AppRouter from "./app-router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
