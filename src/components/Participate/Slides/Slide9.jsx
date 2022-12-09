import React, { useState } from "react";
import patientlyLogo from "../../../assets/images/patientlyLogo.png";
import "./slide9.css";
import { Link } from "react-router-dom";
import personImg from "../../../assets/images/personImg.png";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const Slide9 = () => {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="full-page-container d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-light head-bar">
        <div className="container-fluid d-flex ">
          <div className="h-20">
            <Link className="navbar-brand" to="/">
              <img
                src={patientlyLogo}
                alt="app-logo"
                style={{ height: "40px" }}
              />
            </Link>
          </div>
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
          <div className="d-flex flex-row justify-content-end username-div">
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    John Doe
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
      </nav>
      <div className="pt-3 px-5">
        <p className="color-primary fs-36 fw-bold mb-0">Welcome John Doe</p>
        <p className="color-primary"> You have 0 records</p>
      </div>
      <div className="d-flex flex-row col-12 px-5">
        <div className="col-2 record-container me-5 ">
          <p className="col-12 text-center my-5">No Records</p>
        </div>
        <div className="col-2 file-uploader">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            classes="col-12"
          >
            <div className="c-12 file-upload-label d-flex justify-content-center  ">
              <div className="file-upload-label-main">
                <p className="color-primary fs-16 fw-bold my-0 pt-5">
                  Drag here to upload
                </p>
                <p className="color-primary fs-16 fw-bold mt-0">or</p>
                <div className="pt-5">
                  <button className="button-browse button-layout px-5">
                    Browse
                  </button>
                </div>
                <div className="mt-1">
                  <p className="fs-12 pt-3 ps-3">
                    Supported formats are PDF, JPG, Word Document , Maximum file
                    size 10 MB
                  </p>
                </div>
              </div>
            </div>
          </FileUploader>
        </div>
      </div>
    </div>
  );
};

export default Slide9;
