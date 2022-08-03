import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";
const BlogForm = () => {
  const { blogData } = useContext(BlogContext);
  console.log(blogData);

  const navigate = useNavigate();

  const handleDetail = (david) => {
    navigate("/details");
    // console.log(david);
  };

  return blogData?.map((item, index) => {
    // console.log(item.id);
    return (
      <div role="button" key={index} onClick={() => handleDetail(item.id)}>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={item.imageUrl} alt="" />
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
