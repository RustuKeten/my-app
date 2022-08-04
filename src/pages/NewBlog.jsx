import React, { useContext, useState } from "react";
import blok from "../assets/blok.png";
import { AuthContext } from "../context/AuthContext";
import { writeNewBlog } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmitBlog = (e) => {
    e.preventDefault();
    // console.log(title, imageUrl, context);
    const id = new Date().getTime();
    const email = currentUser.email;
    writeNewBlog(id, title, imageUrl, content, email);
    navigate("/");
  };
  return (
    <div className="Container">
      <section className="vh-100 gradient-custom">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="newBlog align-items-center ">
                <img src="" alt="" />
                <form onSubmit={handleSubmitBlog}>
                  <img
                    src={blok}
                    alt=""
                    width="180"
                    height="180"
                    className="blog  mb-3"
                    style={{ marginLeft: "140px" }}
                  />
                  <h1 className="text-center bg-light border rounded text-primary">
                    New Blog
                  </h1>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="title"
                      placeholder="Title*"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="url"
                      className="form-control mb-2"
                      id="imageUrl"
                      placeholder="Image URL*"
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="context"
                      placeholder="Content*"
                      style={{ height: "150px" }}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="form-control bg-primary border-0 text-light"
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
};

export default NewBlog;
