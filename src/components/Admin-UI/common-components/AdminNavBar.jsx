import React from "react";
import personImg from "../../../assets/images/personImg.png";
import "./AdminNavBar.css";
import "../../../styles/common/global.css";
import { BiSearch } from "react-icons/bi";

const AdminNavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-green admin-navbar">
      <div className="container-fluid justify-content-evenly">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <form className="d-flex col-6">
            <div className="form-control me-2 search-bar">
              <input
                type="search"
                placeholder="Search Here"
                aria-label="Search"
              />
              <button type="submit">
                <BiSearch />
              </button>
            </div>

            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </form>
        </div>
        <div className="d-flex flex-row">
          <div className="d-flex flex-row admin-username-div">
            <div className="p-2">
              <img
                src={personImg}
                alt="person-logo"
                style={{ height: "30px" }}
              />
            </div>
            <div
              className="collapse navbar-collapse d-flex justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown ">
                  <a
                    className="  nav-link dropdown-toggle username-link link-tag"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gavin Cooper
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
