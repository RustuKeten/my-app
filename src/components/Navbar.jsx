import React, { useContext } from "react";
import cw from "../assets/cw.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";
import { logOut } from "../helpers/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // const currentUser = false;
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary navbar-inverse sticky-top"
      style={{ height: " 5rem" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="/">
          <img
            src={cw}
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
        </a>
        <p
          className="rustu text-warning d-none d-sm-block me-1"
          role="button"
          onClick={() => navigate("/")}
        >
          <span>
            <big>&lt;R</big>
            <small>USTU</small>
            <big>K</big>
            <small>ETEN</small>
            <big>/&gt;</big>
            <span style={{ color: "white" }}>
              <big>B</big>LOG
            </span>
          </span>
        </p>
        <div className="d-flex text-white align-items-center ">
          {currentUser ? (
            <>
              <h5 className="mb-0 d-none d-sm-block d-sm-none d-md-block text-warning">
                {currentUser.email}
              </h5>
              <div
                className="dropdown border-0"
                style={{ marginRight: "2rem" }}
              >
                <button
                  type="button"
                  className="btn dropdown border-0 "
                  data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
                  <FontAwesomeIcon
                    className="fa-2x text-warning"
                    icon={faCircleUser}
                  ></FontAwesomeIcon>
                </button>
                <ul className="dropdown-menu me-3">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/newblog">
                      New Blog
                      <FontAwesomeIcon
                        className="fa-x text-warning me-2"
                        icon={faStar}
                      ></FontAwesomeIcon>
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => logOut(navigate)}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <h5 className="mb-0 text-capitalize">Sign In</h5>
              <div
                className="dropdown border-0"
                style={{ marginRight: "2rem" }}
              >
                <button
                  type="button"
                  className="btn dropdown border-0"
                  data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
                  <FontAwesomeIcon
                    className="fa-2x text-light text-center"
                    icon={faCircleUser}
                  ></FontAwesomeIcon>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
