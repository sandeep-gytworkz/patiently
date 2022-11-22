import React, { useState } from "react";
import Slide2 from "./Slide2";
import homeImg from "../../../assets/images/homeImg.png";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";
import TermsModal from "../../../UI/modals/TermsModal";

const Slide1 = ({ changeSlide }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [termsState, setTermsState] = useState(false);
  const passwordGenerator = () => {
    var generator = require("generate-password-browser");

    var password = generator.generate({
      length: 10,
      numbers: true,
    });

    console.log(password);
  };

  return (
    <>
      {isRegister ? (
        <>
          <div className="col-5">
            <img
              src={homeImg}
              alt="home page logo"
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-7">
            <h2 className="color-primary fs-24 px-2 ">
              Register your account with us
            </h2>
            <form
              onSubmit={() => {
                setIsRegister(false);
              }}
              className="mt-1 d-flex flex-column col-12"
            >
              <div className="d-flex flex-row justify-content-evenly col-11">
                <div className="mb-1 p-2 col-6 ">
                  <label
                    htmlFor="firstName"
                    className="form-label fs-6 color-primary"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter first name "
                    required
                  />
                </div>
                <div className="mb-1 p-2 col-6 ">
                  <label
                    htmlFor="lastName"
                    className="form-label fs-6 color-primary"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>
              <div className="d-flex flex-row justify-content-evenly  col-11">
                <div className="mb-1 p-2 col-6 ">
                  <label
                    htmlFor="inputEmail"
                    className="form-label fs-6 color-primary"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter email ID"
                    required
                  />
                </div>
                <div className="mb-1 p-2 col-6 ">
                  <label
                    htmlFor="contactNumber"
                    className="form-label fs-6 color-primary"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNumber"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div className="d-flex flex-row justify-content-evenly col-11">
                <div className="mb-1 p-2 col-6 ">
                  <label
                    htmlFor="password"
                    className="form-label fs-6 color-primary"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div className="mb-1 p-2 col-6 d-flex align-items-end">
                  <button className="button-a-tag" onClick={passwordGenerator}>
                    Generate Password
                  </button>
                </div>
              </div>
              <div className=" col-10 form-check justify-content-between mb-1 mx-2">
                {termsState ? (
                  <input
                    type="checkbox"
                    className="form-check-input  "
                    id="check"
                    required
                    checked
                  />
                ) : (
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check"
                    required
                    disabled
                  />
                )}
                <label className="form-check-label">
                  I Agree, I have read and agree to the &nbsp;
                </label>

                <TermsModal
                  stateChanger={() => {
                    setTermsState(true);
                  }}
                />
                <a
                  className="color-primary fs-12 a-tag"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                >
                  Terms
                </a>
              </div>
              <div className="d-flex flex-row px-2">
                <button
                  type="submit"
                  className="button-layout button-magic-mint me-3"
                >
                  Continue to register
                </button>
                <div className=" ms-3">
                  <p className="mb-0 py-2">
                    Already user?
                    <Link className="a-tag " to="/login">
                      &nbsp; Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <Slide2 changeSlide={changeSlide} />
      )}
    </>
  );
};

export default Slide1;
