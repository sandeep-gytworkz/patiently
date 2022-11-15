import React from "react";
import Logo from "../../../src/assets/images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ hideRight }) => {
  if (hideRight) {
    return (
      <nav class="navbar navbar-expand-lg p-0 full-header">
        <div class="container-fluid">
          <div className="col-1 left-gutter h-100 d-inline-block"></div>
          <a class="navbar-brand col-11 h-100 m-0 pt-5" href="/#">
            <img src={Logo} alt="logo" className="logo" />
          </a>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid header-container">
        <div className="col-1 left-gutter h-100 d-inline-block"></div>
        <a className="navbar-brand col-5 h-100 m-0 pt-5" href="/#">
          <img src={Logo} alt="logo" className="logo" />
        </a>
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
          className="collapse navbar-collapse right-header h-100 m-0 pt-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/#">
                Data Security
              </a>
            </li>
          </ul>

          <ul className="navbar-nav d-flex">
            <li className="nav-item px-3">
              <a className="nav-link" aria-current="page" href="/#">
                Login
              </a>
            </li>
            <li className="nav-item participate-now">
              <a className="nav-link" href="/participate-now">
                Participate Now
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
        <div className="col-1 right-gutter h-100 d-inline-block"></div>
      </div>
    </nav>
  );
};

export default Header;
