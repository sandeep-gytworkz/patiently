import React, { useState } from "react";
import Slide2 from "./Slide2";
import homeImg from "../../../assets/images/homeImg.png";
import "../../../styles/common/global.css";

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
            <h2 className="color-primary fs-24 px-2 py-4">
              Register your account with us
            </h2>
            <form
              onSubmit={() => {
                setIsRegister(false);
              }}
              className="mt-2 d-flex flex-column col-12"
            >
              <div className="d-flex flex-row justify-content-evenly col-11">
                <div className="mb-3 p-2 col-6 ">
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
                  />
                </div>
                <div className="mb-3 p-2 col-6 ">
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
                  />
                </div>
              </div>
              <div className="d-flex flex-row justify-content-evenly  col-11">
                <div className="mb-3 p-2 col-6 ">
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
                  />
                </div>
                <div className="mb-3 p-2 col-6 ">
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
              <div className=" col-10 form-check justify-content-between mb-5 mx-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" htmlFor="check">
                  I Agree, I have read and agree to the Terms
                </label>
              </div>
              <div className="d-flex flex-row px-2">
                <button
                  type="submit"
                  className="button-layout button-contained me-3"
                >
                  Continue to register
                </button>
                <div className=" ms-3">
                  <p className="mb-0 py-2">
                    Already user? 
                    <a className="a-tag " href="/login">
                     &nbsp; Login
                    </a>
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
