import React, { createContext, useState, useEffect } from "react";
import { readData } from "../helpers/firebase";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    readData(setBlogData);
  }, []);
  // console.log(blogData);

  return (
    <BlogContext.Provider value={{ blogData }}>{children}</BlogContext.Provider>
  );
};

export default BlogContextProvider;
