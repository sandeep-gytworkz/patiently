import React, { useState, useReducer } from "react";
import homePageCircle from "../../assets/images/homePageCircle.svg";
import arrow from "../../assets/images/arrow.svg";
import "../../styles/common/global.css";
import { Link } from "react-router-dom";
import TermsModal from "../../UI/modals/TermsModal";
import { registrationReducer, initRegState } from "./Reducers/Signup";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import { BsArrowRight } from "react-icons/bs";
import "./Signup.css";

const Signup = ({ changeSlide }) => {
  const [termsState, setTermsState] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [registrationData, dispatch] = useReducer(
    registrationReducer,
    initRegState
  );

  const passwordGenerator = (e) => {
    if (!e.target.checked) {
      setPasswordValue("");
      return;
    }
    var generator = require("generate-password-browser");

    var password = generator.generate({
      length: 10,
      numbers: true,
      symbols: true,
      exclude: '{,},`,~,[,],|,/,:,",(,),<,>,%,^,;,=,-,+,?',
    });

    setPasswordValue(password);
  };

  const submitRegistration = () => {
    let regData = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    };
    dispatch({ type: "REGISTRATION_COMPLETE", data: regData });
    changeSlide(2);
  };

  return (
    <div className="d-flex flex-column homePage-container">
      <Header />
      <div className="container-fluid text-left">
        <div className="row content-section">
          <div className="col-sm-12 col-md-5 offset-md-1 px-5 ">
            <p className="color-primary  px-2 mt-3 mb-0 fw-m fs-20 signup-underline">
              SIGN UP
            </p>
            <div className="d-flex flex-column align-items-center">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  submitRegistration();
                }}
                className=" d-flex flex-column col-12"
              >
                <div className="mb-1 p-2 col-10 ">
                  <label
                    htmlFor="fullName"
                    className="form-label fs-16 color-primary mb-0 fw-m"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full Name "
                    required
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="mb-1 p-2 col-10 ">
                  <label
                    htmlFor="inputEmail"
                    className="form-label fs-16 color-primary fw-m mb-0"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter email ID"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-1 p-2 col-10 ">
                  <label
                    htmlFor="contactNumber"
                    className="form-label fs-16 color-primary fw-m mb-0"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNumber"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mb-1 p-2 col-10 ">
                  <label
                    htmlFor="password"
                    className="form-label fs-16 color-primary d-flex justify-content-between fw-m mb-0"
                  >
                    Password*
                    <span>
                      <input
                        type="checkbox"
                        className="form-check-input checkbox-input "
                        id="check"
                        onChange={passwordGenerator}
                      />
                      &nbsp;
                      <label className="form-check-label fs-16 fw-m mb-0">
                        Auto Generate password
                      </label>
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                </div>
                <div className="mb-1 p-2 col-10">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label fs-16 color-primary fw-m mb-0"
                  >
                    Confirm Password*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Re-enter password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className=" col-10 form-check justify-content-between mb-1 mx-2 ">
                  <input
                    type="checkbox"
                    className="form-check-input checkbox-input "
                    id="check"
                    required
                    checked={termsState}
                    onChange={() => {
                      setTermsState(!termsState);
                    }}
                    disabled={!termsState}
                  />

                  <label className="form-check-label fw-r">
                    I Agree to the &nbsp;
                  </label>

                  <TermsModal
                    stateChanger={() => {
                      setTermsState(true);
                    }}
                  />
                  <a
                    className=" fs-14 a-tag-common fw-m"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalLong"
                    href="#"
                  >
                    Terms & Conditions
                  </a>
                </div>
                <div className="d-flex flex-column px-2">
                  <button
                    type="submit"
                    className="button-layout button-green me-3 col-10"
                    disabled={
                      !(
                        fullName &&
                        email &&
                        phoneNumber &&
                        passwordValue &&
                        confirmPassword
                      )
                    }
                  >
                    Sign Up &nbsp; <BsArrowRight />
                  </button>
                  <div className="text-center col-10">
                    <p className="mb-0 py-1 fw-r fs-16">
                      Already registered?
                      <Link className="a-tag-btn fw-m fs-16 " to="/login">
                        &nbsp; Login
                      </Link>
                    </p>
                  </div>
                </div>
                <Footer alignment="justify-content-center" />
              </form>
            </div>
          </div>

          <div className=" d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end">
            <img src={homePageCircle} alt="circles image" className=" col-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
