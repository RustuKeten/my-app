import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import blok from "../assets/blok.png";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import { updateData } from "../helpers/firebase";

const UpdateBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const { blogData } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateData(id, title, image, content);
    console.log(updateData);
  };

  return blogData
    ?.filter((item) => id == item.id)
    .map((updateData, index) => {
      // console.log(updateData);
      return (
        <div className="Container" key={index}>
          <section className="vh-100 gradient-custom">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="newBlog align-items-center ">
                    <img src="" alt="" />
                    <form>
                      <img
                        src={blok}
                        alt=""
                        width="180"
                        height="180"
                        className="blog  mb-3"
                        style={{ marginLeft: "140px" }}
                      />
                      <h1 className="text-center bg-light border rounded text-primary">
                        Update Blog
                      </h1>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="title"
                          placeholder="Title*"
                          defaultValue={updateData.title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="url"
                          className="form-control mb-2"
                          id="imageUrl"
                          placeholder="Image URL*"
                          defaultValue={updateData.imageUrl}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                      <div className="form-group ">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="content"
                          placeholder="Content*"
                          style={{ height: "150px" }}
                          defaultValue={updateData.content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="form-control bg-primary border-0 text-light"
                        onSubmit={handleUpdate}
                      >
                        SUBMIT
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    });
};

export default UpdateBlog;
