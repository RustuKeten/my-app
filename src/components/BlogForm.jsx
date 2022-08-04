import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          currentUser
            ? navigate("/details" + item.id)
            : toastWarnNotify("please log in to see details!") &&
              navigate("/login");
        }}
      >
        <div className="card  card-deck d-flex align-items-center p-1 text-dark text-center ">
          <img
            className="card-img-top"
            src={item.imageUrl}
            alt=""
            style={({ width: "18rem" }, { height: "18rem" })}
          />
          <div
            className="card-body "
            style={({ width: "18rem" }, { height: "15rem" })}
          >
            <h5 className="card-title">{item.title}</h5>
            <p
              className="card-text overflow-hidden"
              style={({ width: "18rem" }, { height: "5rem" })}
            >
              {item.content}
            </p>
            <h6 className="card-title overflow-hidden">{item.email}</h6>
            <FontAwesomeIcon
              className="fa-2x text-danger mt-3 "
              icon={faHeart}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="fa-2x text-dark ms-3 "
              icon={faThumbsUp}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    );
  });
};

export default BlogForm;
