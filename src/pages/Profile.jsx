import React from "react";

const Profile = () => {
  return (
    <div className="card text-center mt-5 mx-5" style={{ height: "18rem" }}>
      <div className="card-header">Profile</div>
      <div className="card-body">
        <h5 className="card-title">
          Dear User; <br /> You can add new blogs and see details of all blogs,
          finally you can just edit your own added blogs.
        </h5>
        <p className="card-text">
          {/* With  your supporting text below as a natural lead-in to additional content. */}
        </p>
        <a href="/" className="btn btn-primary mt-5">
          Go Dashboard
        </a>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
};

export default Profile;
