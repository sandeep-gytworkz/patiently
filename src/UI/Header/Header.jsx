import React from "react";
import Logo from "../../../src/assets/images/logo.png";
import "./Header.css";


const Header = ({hideRight}) => {
  if(hideRight){
    return(
      <nav class="navbar navbar-expand-lg p-0">
        <div class="container header-container">
          <a class="navbar-brand col-5 h-100 m-0 pt-5" href="/#">
            <img src={Logo} alt="logo" className="logo" />
          </a>
        </div>
      </nav>
    )
  }
  
  return (
    <nav class="navbar navbar-expand-lg p-0">
      <div class="container-fluid header-container">
        <div className="col-1 left-gutter h-100 d-inline-block"></div>
        <a class="navbar-brand col-5 h-100 m-0 pt-5" href="/#">
          <img src={Logo} alt="logo" className="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse right-header h-100 m-0 pt-5" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item px-3">
              <a class="nav-link" aria-current="page" href="/about">About</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="/#">Data Security</a>
            </li>
          </ul>

          <ul class="navbar-nav d-flex">
            <li class="nav-item px-3">
              <a class="nav-link" aria-current="page" href="/#">Login</a>
            </li>
            <li class="nav-item participate-now">
              <a class="nav-link" href="/participate-now">Participate Now</a>
            </li>
          </ul>
          {/* <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
        <div className="col-1 right-gutter h-100 d-inline-block"></div>
      </div>
    </nav>
  );
};

export default Header;
