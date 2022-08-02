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
          <div className="col-12 d-flex ">
            <BlogCard />

            {/* <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <BlogCard />
        )}
      </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
