import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

const DashBoard = () => {
  // const [loading, setLoading] = useState(false);
  // setLoading(true);
  return (
    <>
      <h1 className="text-center">DASHBOARD</h1>
      <div className="container">
        <div className="row d-flex">
          <div className="col-1 d-flex">
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
