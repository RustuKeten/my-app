import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="card text-center mt-5 mx-5" style={{ height: "18rem" }}>
      <div className="card-header">Profile</div>
      <div className="card-body">
        <p className="card-text mt-4">{currentUser.email}</p>
        <h5 className="card-title">
          Dear User; <br /> You can add new blogs and see details of all blogs.{" "}
          <br />
          And you can just edit your own added blogs. <br /> Happy Coding...
        </h5>

        <a href="/" className="btn btn-primary mt-5">
          Go Dashboard
        </a>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

export default Profile;
