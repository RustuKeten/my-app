import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";

const Details = () => {
  const { currentUser } = useContext(AuthContext);
  const { blogData } = useContext(BlogContext);
  const { id } = useParams();

  return blogData
    ?.filter((item) => id == item.id)
    .map((filteredData, index) => {
      // console.log(filteredData);
      return (
        <div key={index} className="justify-content-center">
          <div className="text-center text-primary">
            <h1>Details</h1>
          </div>
          <div
            className="card mb-3 justify-content-center"
            style={{ width: "45rem" }}
          >
            <img
              className="card-img-top "
              src={filteredData.imageUrl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title bg-success">{filteredData.title}</h5>
              <p className="card-text">{filteredData.content}</p>
              <p className="card-text">
                <small className="text-muted">{filteredData.email}</small>
              </p>
            </div>
            {currentUser.email === filteredData.email && (
              <>
                <button>Update</button>
                <button>Delete</button>
              </>
            )}
          </div>
        </div>
      );
    });
};

export default Details;
