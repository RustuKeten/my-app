import React from "react";
import cw from "../assets/cw.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary"
      style={{ height: " 6rem" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" style={{ marginLeft: "2rem" }} href="/">
          <img
            src={cw}
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
        </a>
        <p className="text-warning rustu">
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
        <div className="dropdown" style={{ marginRight: "2rem" }}>
          <button
            type="button"
            className="btn dropdown mr-4"
            data-bs-toggle="dropdown"
            // aria-expanded="false"
          >
            <FontAwesomeIcon
              className="fa-2x text-light"
              icon={faCircleUser}
            ></FontAwesomeIcon>
          </button>
          <ul className="dropdown-menu ">
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
      </div>
    </nav>
  );
};

export default Navbar;
