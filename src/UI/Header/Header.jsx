import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "../../styles/common/global.css";
import patientlyLogo from "../../assets/images/patientlyLogo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-xs-0 px-sm-4 container-shadow">
      <div className="col-sm-5 col-12 px-xs-0 px-sm-4 d-flex justify-content-between">
        <Link
          className="navbar-brand col-lg-6 col-xs-10 h-100 m-0 px-sm-5 px-3"
          to="/"
        >
          <img src={patientlyLogo} alt="patiently -logo " height={"120px"} className={'d-none d-sm-block'} />
          <img src={patientlyLogo} alt="patiently -logo " height={"80px"} className={'d-block d-sm-none'} />
        </Link>
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
      </div>
      <div className="col-sm-7">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex">
            <li className="nav-item px-3">
              <Link className="nav-link fs-28 fw-sb" to="/how-it-works">
                How it Works?
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link fs-28 fw-sb" to="/data-privacy">
                Data Privacy
              </Link>
            </li>
            <li className="nav-item px-3 ">
              <Link className="nav-link fs-28 fw-sb " to="/about">
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className="nav-link fs-28 fw-sb "
                aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item participate-now px-3">
              <Link
                className="nav-link fs-28 fw-sb signUp-btn px-4"
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
