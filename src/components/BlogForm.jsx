import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

const BlogForm = () => {
  const { blogData } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  return blogData?.map((item, index) => {
    return (
      <div
        style={{ width: "18rem" }}
        role="button"
        key={index}
        onClick={() => {
          navigate("/details" + item.id);
          !currentUser && toastWarnNotify("please log in to see details!");
        }}
      >
        <div className="card  card-deck d-flex align-items-center p-1 text-dark ">
          <img
            className="card-img-top"
            src={item.imageUrl}
            alt=""
            style={({ width: "18rem" }, { height: "25rem" })}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.content}</p>
            <h6 className="card-title">{item.email}</h6>
            <a href="# " className="btn btn-primary">
              Like and Share
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default BlogForm;
