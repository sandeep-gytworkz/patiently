import React, { useState } from "react";
import Slide2 from "./Slide2";
import homeImg from "../../../assets/images/homeImg.png";

const Slide1 = ({ changeSlide }) => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <>
      {isRegister ? (
        <>
          <div style={{ height: "100%", width: "40%" }}>
            <img
              src={homeImg}
              alt="home page logo"
              style={{ height: "70%", marginTop: "15%", marginLeft: "15%" }}
            />
          </div>
          <div style={{ height: "100%", width: "60%" }}>
            <h3 style={{ padding: "0.75rem" }}>
              Register your account with us
            </h3>
            <form
              onSubmit={() => {
                setIsRegister(false);
              }}
            >
              <div className="d-flex flex-row ">
                <div className="mb-3 p-2  ">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="mb-3 p-2 ">
                  <label htmlFor="lastName" className="form-label">
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
              <div className="d-flex flex-row p-2">
                <div className="mb-3 p-2">
                  <label htmlFor="inputEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter email ID"
                  />
                </div>
                <div className="mb-3 p-2">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="contactNumber"
                  />
                </div>
              </div>
              <div className="ms-3 mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" htmlFor="check">
                  I Agree, I have read and agree to the Terms
                </label>
              </div>
              <div className="ms-3 d-flex flex-row">
                <button type="submit" className="btn btn-primary btn-lg ">
                  Continue to register
                </button>
                <p style={{ marginLeft: "10%" }}>
                  Already user ? <a href="#">Login</a>
                </p>
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
