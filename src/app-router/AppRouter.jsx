import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Details from "../pages/Details";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import BlogForm from "../components/BlogForm";
import UpdateBlog from "../pages/UpdateBlog";
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details:id" element={<Details />} />
        <Route path="/updateBlog:id" element={<UpdateBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/blogForm" element={<BlogForm />} />
      </Routes>
    </>
  );
};

export default AppRouter;
