import { faWalkieTalkie } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import { deleteData } from "../helpers/firebase";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";

const Details = () => {
  const { currentUser } = useContext(AuthContext);
  const { blogData, setTitle, setImageUrl, setContent, setSendId } =
    useContext(BlogContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = (content, title, imageUrl) => {
    setTitle(title);
    setImageUrl(imageUrl);
    setContent(content);
    setSendId(id);
    toastSuccessNotify("Updated Your Blog!");
    navigate("/updateBlog" + id);
    // console.log(title, content, imageUrl);
  };

  return blogData
    ?.filter((item) => id == item.id)
    .map((filteredData, index) => {
      // console.log(filteredData);
      return (
        <div className="container py-5" key={index}>
          <h1 className="text-center">Details</h1>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className=" card-img-top "
                  src={filteredData.imageUrl}
                  alt=""
                  style={({ width: "20rem" }, { height: "15rem" })}
                />
              </div>
              <div className="col-md-8 d-flex flex-column ">
                <div className="card-body">
                  <h5 className="card-title">{filteredData.title}</h5>
                  <p className="card-text">{filteredData.content}</p>
                  <h5 className="card-title mt-5">{filteredData.email}</h5>
                </div>
              </div>
              {currentUser.email === filteredData.email && (
                <>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      handleEdit(
                        filteredData.content,
                        filteredData.title,
                        filteredData.imageUrl
                      )
                    } //**tekrar edilecek. */
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteData(filteredData.id);
                      toastWarnNotify("Deleted Successfully!");
                      navigate("/");
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
          <Link to={-1} className="card-link">
            Go Back
          </Link>
        </div>
      );
    });
};

export default Details;
