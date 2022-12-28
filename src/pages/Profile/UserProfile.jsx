import React, { useState } from "react";
import patientlyLogo from "../../assets/images/patientlyLogo.png";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import personImg from "../../assets/images/personImg.png";
import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";
import { BsBell } from "react-icons/bs";
import "../../styles/common/global.css";
import profileDocument from "../../assets/images/profileDocument.svg";
import trash from "../../assets/images/trash.svg";

const fileTypes = ["JPG", "PNG", "GIF"];

const MainContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const RecordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const RecordsCard = styled.div`
  background-color: white;
  box-shadow: 0px 4px 6px #0000000f;
  border: 1px solid #dddddd;
  border-radius: 4px;
  height: 320px;
  width: 250px;
  align-items: center;
  display: flex;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const UploadCard = styled.div`
  height: 320px;
  width: 250px;
  padding: 0 10px;
`;

const Slide9 = () => {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="full-page-container d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-light head-bar px-3 px-sm-4 justify-content-center">
        <div className="px-xs-0 px-sm-5 d-flex justify-content-between col-12 ">
          <div className="h-20">
            <Link className="navbar-brand" to="/">
              <img
                src={patientlyLogo}
                alt="app-logo"
                style={{ height: "100px" }}
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <div className="d-flex flex-row align-items-center ">
                  <BsBell color="grey" className="me-3" role="button" />

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
                              <Link className="dropdown-item" to="/">
                                Log out
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-3 px-sm-5 px-2">
        <p className=" fs-36 fw-b mb-0 px-4">Welcome John Doe</p>
        <p className=" fs-14 px-4 fw-m"> You have 1 record</p>
      </div>
      <MainContainer className="d-flex flex-row col-12 px-sm-5 px-2 mb-4">
        <div className="px-4 d-flex flex-row flex-wrap">
          <RecordsContainer className="mb-4">
            <p className="fs-18 fw-m">My Records</p>
            <RecordsCard className="col-2">
              <div className="col-10 d-flex flex-column align-items-center offset-1">
                <div className="col-12 d-flex flex-row justify-content-between mb-3">
                  <img src={profileDocument} alt="profile-document" />
                  <img src={trash} alt="delete-button" />
                </div>
                <div>
                  <p className="fs-20 fw-m line-height">
                    Cancer Assesment Document
                  </p>
                </div>
                <div className="col-12">
                  <p style={{ color: "#6F7070" }} className="mb-0">
                    Upload Date
                  </p>
                  <p className="fw-m fs-18">September 20, 2022</p>
                </div>
                <div className="col-12">
                  <button className="w-100 py-2 download-button fs-18">
                    Download
                  </button>
                </div>
              </div>
            </RecordsCard>
          </RecordsContainer>
          <UploadContainer className="col-2 mb-4">
            <p className="fs-18 fw-m">Upload More</p>
            <FileUploader
              className="col-2"
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              classes="col-12"
            >
              <UploadCard className="col-12 file-upload-label d-flex justify-content-center  align-items-center">
                <div className="file-upload-label-main">
                  <p className="color-primary fs-16 fw-bold my-0 pt-5">
                    Drag here to upload
                  </p>
                  <p className="color-primary fs-16 fw-bold mt-0">or</p>
                  <div className="pt-5 w-100">
                    <button className="button-browse button-layout px-5 w-100 fs-18">
                      Browse
                    </button>
                  </div>
                  <div className="mt-1">
                    <p className="fs-12 pt-3 text-center">
                      Supported formats are PDF, JPG, Word Document, Maximum
                      file size 10 MB
                    </p>
                  </div>
                </div>
              </UploadCard>
            </FileUploader>
          </UploadContainer>
        </div>
      </MainContainer>
    </div>
  );
};

export default Slide9;
