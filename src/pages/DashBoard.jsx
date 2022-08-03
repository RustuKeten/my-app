import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

const DashBoard = () => {
  // const [loading, setLoading] = useState(false);
  // setLoading(true);
  return (
    <>
      <h1 className="text-center">DASHBOARD</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <BlogCard />
      </div>
    </>
  );
};

export default DashBoard;
