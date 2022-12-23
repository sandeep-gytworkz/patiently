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
import rightWhiteArrow from "../../assets/images/rightWhiteArrow.svg";
import greyRightArrow from "../../assets/images/greyRightArrow.svg";

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

      <div className="row flex-grow-1 ">
        <div className="col-sm-12 col-md-5 offset-md-1 px-sm-5 px-4 ">
          <p className="color-primary  px-2  my-4 fw-m fs-20 signup-underline">
            SIGN UP
          </p>
          <div className="d-flex flex-column align-items-center form-class">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitRegistration();
              }}
              className=" d-flex flex-column col-12 "
            >
              <div className="mb-1 p-2 col-sm-10 col-12 ">
                <label
                  htmlFor="fullName"
                  className="form-label fs-16 color-primary mb-2 fw-m"
                >
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control input-class"
                  id="fullName"
                  placeholder="Full Name "
                  required
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-1 p-2 col-sm-10 col-12 ">
                <label
                  htmlFor="inputEmail"
                  className="form-label fs-16 color-primary fw-m mb-2"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control input-class"
                  id="inputEmail"
                  placeholder="mail@website.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1 p-2 col-sm-10 col-12 ">
                <label
                  htmlFor="contactNumber"
                  className="form-label fs-16 color-primary fw-m mb-2"
                >
                  Phone Number*
                </label>
                <input
                  type="text"
                  className="form-control input-class"
                  id="contactNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-1 p-2 col-sm-10 col-12 ">
                <label
                  htmlFor="password"
                  className="form-label fs-16 color-primary d-flex justify-content-between fw-m mb-2"
                >
                  Password*
                  <span>
                    <input
                      type="checkbox"
                      className="form-check-input checkbox-input"
                      id="check"
                      onChange={passwordGenerator}
                    />
                    &nbsp;
                    <label className="form-check-label fs-16 fw-m mb-2">
                      Auto Generate password
                    </label>
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control input-class"
                  id="password"
                  placeholder="Minimum 8 character"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
              </div>
              <div className="mb-1 p-2 col-sm-10 col-12">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fs-16 color-primary fw-m mb-2 "
                >
                  Confirm Password*
                </label>
                <input
                  type="text"
                  className="form-control input-class"
                  id="confirmPassword"
                  placeholder="Minimum 8 character"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="col-sm-10 col-12 form-check justify-content-between my-2 mx-2 ">
                <input
                  type="checkbox"
                  className="form-check-input checkbox-input"
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
                  className="fs-16 a-tag-link fw-m"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                  href="#"
                >
                  Terms & Conditions
                </a>
              </div>
              <div className="d-flex flex-column px-2 col-sm-10 col-12 mb-2">
                <button
                  type="submit"
                  className="button-layout button-green me-3 col-12 fs-18 fw-m button-signUp"
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
                  Sign Up &nbsp;
                  <img src={rightWhiteArrow} alt="right-arrow" />
                </button>
                <div className="text-center col-12">
                  <p className="mb-0 py-1 fw-r fs-16">
                    Already registered?
                    <Link className="a-tag-link fw-m fs-16 " to="/login">
                      &nbsp; Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
            <Footer alignment="justify-content-center" />
          </div>
        </div>

        <div className=" d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end d-none d-sm-block">
          <img src={homePageCircle} alt="circles image" className=" col-8" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
