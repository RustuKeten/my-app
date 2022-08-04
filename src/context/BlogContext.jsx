import React, { createContext, useState, useEffect } from "react";
import { readData } from "../helpers/firebase";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [sendId, setSendId] = useState("");

  useEffect(() => {
    readData(setBlogData);
  }, []);
  // console.log(blogData);

  return (
    <BlogContext.Provider
      value={{
        blogData,
        title,
        setTitle,
        imageUrl,
        setImageUrl,
        content,
        setContent,
        sendId,
        setSendId,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
