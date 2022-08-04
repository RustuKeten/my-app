import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import { deleteData } from "../helpers/firebase";

const Details = () => {
  const { currentUser } = useContext(AuthContext);
  const { blogData } = useContext(BlogContext);
  const { id } = useParams();
  const navigate = useNavigate();

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
            <img className="card-img-top " src={filteredData.imageUrl} alt="" />
            <div className="card-body">
              <h5 className="card-title bg-success">{filteredData.title}</h5>
              <p className="card-text">{filteredData.content}</p>
              <p className="card-text">
                <small className="text-muted">{filteredData.email}</small>
              </p>
            </div>
            {currentUser.email === filteredData.email && (
              <>
                <button
                  onClick={() => navigate("/updateBlog" + filteredData.id)}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    deleteData(filteredData.id);
                    navigate("/");
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      );
    });
};

export default Details;
