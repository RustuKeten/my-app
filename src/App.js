import "./App.css";
import React from "react";
import AppRouter from "./app-router/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import BlogContextProvider from "./context/BlogContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
