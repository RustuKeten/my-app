import "./App.css";
import React from "react";
import AppRouter from "./app-router/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        {/* <ToastContainer /> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
