import React, { useState } from "react";

import "./Participate.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Signup from "../SignUp/Signup";
import VerifyOtp from "../Login/VerifyOtp/VerifyOtp";
import Questions from "./Slides/Questions";
import Question1 from "./Slides/Question1";
import Question2 from "./Slides/Question2";
import Question3 from "./Slides/Question3";
import Question4 from "./Slides/Question4";
import UploadRecords from "./Slides/UploadRecords";
import ProfileCreated from "./Slides/ProfileCreated";
import patientlyLogo from "../../assets/images/patientlyLogo.png";

const Participate = () => {
  const [slide, setSlide] = useState(1);
  const slideChangeHandler = (number) => {
    setSlide(number);
  };
  return (
    <>
      {slide === 1 || slide === 2 ? (
        <div>
          {slide === 1 && <Signup changeSlide={slideChangeHandler} />}
          {slide === 2 && (
            <VerifyOtp
              changeSlide={() => {
                slideChangeHandler(3);
              }}
            />
          )}
        </div>
      ) : (
        <div
          className="d-flex flex-column"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#FAFCFC",
          }}
        >
          <div className="d-sm-none d-block">
            <Header hideRight={true} />
          </div>
          <div className="d-sm-block d-none offset-1 pt-2">
            <Link to="/">
              <img src={patientlyLogo} alt="patiently-logo" />
            </Link>
          </div>
          {slide === 3 ||
          slide === 4 ||
          slide === 5 ||
          slide === 6 ||
          slide === 7 ? (
            <div
              className="btn-toolbar justify-content-between"
              role="toolbar"
              aria-label="Toolbar with button groups"
              style={{
                paddingBottom: "10px",
              }}
            >
              <p className="text-center col-12 pt-3 fs-28 dark-blue fw-m mb-0">
                Questions
              </p>
              <div
                className="btn-group mx-auto"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className={
                    slide === 5 || slide === 6 || slide === 7
                      ? "btn-dark"
                      : `btn btn-secondary ${
                          slide === 3 || slide === 4 ? "active" : ""
                        }`
                  }
                >
                  &#11044;
                </button>
                <button
                  type="button"
                  className={
                    slide === 6 || slide === 7
                      ? "btn-dark"
                      : `btn btn-secondary ${slide === 5 ? "active" : ""}`
                  }
                >
                  &#11044;
                </button>
                <button
                  type="button"
                  className={
                    slide === 7
                      ? "btn-dark"
                      : `btn btn-secondary ${slide === 6 ? "active" : ""}`
                  }
                >
                  &#11044;
                </button>
                <button
                  type="button"
                  className={`btn btn-secondary ${slide === 7 ? "active" : ""}`}
                >
                  &#11044;
                </button>
              </div>
            </div>
          ) : (
            <div
              className="btn-toolbar justify-content-between"
              role="toolbar"
              aria-label="Toolbar with button groups"
              style={{
                paddingBottom: "10px",
              }}
            >
              <h3 className="text-center col-12 pt-3 fw-m mb-0">
                {slide === 9 ? "Done" : "Upload Records"}
              </h3>
              <div
                className="btn-group mx-auto"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className={
                    slide === 9
                      ? "btn-dark"
                      : `btn btn-secondary ${slide === 8 ? "active" : ""}`
                  }
                >
                  &#11044;
                </button>
                <button
                  type="button"
                  className={`btn btn-secondary ${slide === 9 ? "active" : ""}`}
                >
                  &#11044;
                </button>
              </div>
            </div>
          )}
          <div className="d-flex flex-row col-12 justify-content-center middle-container">
            {slide === 3 && <Questions changeSlide={slideChangeHandler} />}
            {slide === 4 && <Question1 changeSlide={slideChangeHandler} />}
            {slide === 5 && <Question2 changeSlide={slideChangeHandler} />}
            {slide === 6 && <Question3 changeSlide={slideChangeHandler} />}
            {slide === 7 && <Question4 changeSlide={slideChangeHandler} />}
            {slide === 8 && <UploadRecords changeSlide={slideChangeHandler} />}
            {slide === 9 && <ProfileCreated />}
          </div>
        </div>
      )}
    </>
  );
};

export default Participate;
