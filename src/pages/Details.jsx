import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import { deleteData } from "../helpers/firebase";

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
    navigate("/updateBlog" + id);
    // console.log(title, content, imageUrl);
  };

  return blogData
    ?.filter((item) => id == item.id)
    .map((filteredData, index) => {
      // console.log(filteredData);
      return (
        <div key={index}>
          <h1 className="text-center">Details</h1>
          <div className="card justify-content-center">
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
                  onClick={() =>
                    handleEdit(
                      filteredData.content,
                      filteredData.title,
                      filteredData.imageUrl
                    )
                  } //**tekrar */
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
