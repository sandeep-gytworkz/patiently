import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "../../styles/common/global.css";
import patientlyLogo from "../../assets/images/patientlyLogo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <div className="col-4">
        <Link
          className="navbar-brand col-lg-6 col-xs-10 h-100 m-0 p-sm-4 pt-sm-5"
          to="/"
        >
          <img src={patientlyLogo} alt="patiently -logo " />
        </Link>
      </div>
      <div className="col-8">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex">
            <li className="nav-item px-3">
              <Link className="nav-link fs-28 fw-b" to="/how-it-works">
                How it Works
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link fs-28 fw-b" to="/data-privacy">
                Data Privacy
              </Link>
            </li>
            <li className="nav-item px-3 ">
              <Link className="nav-link fs-28 fw-b " to="/about">
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className="nav-link fs-28 fw-b "
                aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item participate-now">
              <Link
                className="nav-link fs-28 fw-b signUp-btn "
                to="/participate-now"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
