import React from "react";
import Logo from "../../../src/assets/images/logo1.png";
import "./Header.css";
import { Link } from "react-router-dom";
import "../../styles/common/global.css";

const Header = ({ hideRight, toggleAboutUs }) => {
  if (hideRight) {
    return (
      <nav className="navbar navbar-expand-lg p-0 full-header">
        <div className="container-fluid">
          <div className="col-1 left-gutter h-100 d-inline-block"></div>
          <Link className="navbar-brand col-6 h-100 m-0 pt-sm-5 ps-sm-5" to="./#">
            <img src={Logo} alt="logo" className="logo" />
            Patiently
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid header-container px-5">
        {/* <div className="col-1 left-gutter h-100 d-inline-block"></div> */}
        <Link className="navbar-brand col-lg-6 col-xs-10 h-100 m-0 p-sm-4 pt-sm-5" to="./#">
          <img src={Logo} alt="logo" className="logo" height={40} />
          <span className="brand-name">Patiently</span>
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
        <div
          className="collapse navbar-collapse justify-content-end right-header h-100 m-0 pt-5 col-6"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex">
            <li className="nav-item px-3">
              <a
                className="nav-link"
                onClick={()=>{toggleAboutUs()}}
              >
                About
              </a>
            </li>
            <li className="nav-item px-3 ">
              <Link className="nav-link " to="/data-security">
                Data Security
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link " aria-current="page" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item participate-now">
              <Link className="nav-link " to="/participate-now">
                Participate Now
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="col-1 right-gutter h-100 d-inline-block"></div> */}
      </div>
    </nav>
  );
};

export default Header;
