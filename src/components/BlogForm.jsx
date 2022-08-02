import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogForm = () => {
  const { blogData } = useContext(BlogContext);
  // console.log(blogData);

  return (
    <div>
      <h3>merhaba</h3>
    </div>
  );
};

export default BlogForm;
