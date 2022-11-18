import React, { useState } from "react";
import Slide2 from "./Slide2";
import homeImg from "../../../assets/images/homeImg.png";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";
import TermsModal from "../../../UI/Modal/TermsModal";

const Slide1 = ({ changeSlide }) => {
  const [isRegister, setIsRegister] = useState(true);

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
            <h3 className="color-primary fs-24">
              Register your account with us
            </h3>
            <form
              onSubmit={() => {
                setIsRegister(false);
              }}
              className="mt-2 d-flex flex-column "
            >
              <div className="d-flex flex-row justify-content-start ">
                <div className="mb-3 p-2 col-6  ">
                  <label
                    htmlFor="firstName"
                    className="form-label fs-16 color-primary fw-bold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control px-5 input-class"
                    id="firstName"
                    placeholder="Enter first name "
                    required
                  />
                </div>
                <div className="mb-3 p-2 col-6  ">
                  <label
                    htmlFor="lastName"
                    className="form-label fs-16 color-primary fw-bold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control px-5 input-class"
                    id="lastName"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start ">
                <div className="mb-3 p-2 col-6">
                  <label
                    htmlFor="inputEmail"
                    className="form-label fs-16 color-primary fw-bold"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control px-5 input-class"
                    id="inputEmail"
                    placeholder="Enter email ID"
                    required
                  />
                </div>
                <div className="mb-3 p-2 col-6 ">
                  <label
                    htmlFor="contactNumber"
                    className="form-label fs-16 color-primary fw-bold"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control px-5 input-class"
                    id="contactNumber"
                    required
                  />
                </div>
              </div>
              <div className="  form-check d-flex flex-row justify-content-start mb-5   ">
                <input
                  type="checkbox"
                  className="form-check-input  "
                  id="check"
                  required
                />
                <label className="form-check-label" htmlFor="check">
                  I Agree, I have read and agree to the Terms
                </label>
              </div>
              <div className="d-flex flex-row justify-content-start ">
                <TermsModal />
                <button
                  type="submit"
                  className="button-layout button-magic-mint me-3"
                >
                  Continue to register
                </button>
                <div className=" ms-3 d-flex align-items-center">
                  <p>
                    Already user?{" "}
                    <Link className="a-tag " to="/login">
                      Login
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
