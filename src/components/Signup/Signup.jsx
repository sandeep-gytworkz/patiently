import React, { useState, useReducer } from "react";
import homePageCircle from "../../assets/images/homePageCircle.svg";
import arrow from "../../assets/images/arrow.svg";
import "../../styles/common/global.css";
import { Link } from "react-router-dom";
import TermsModal from "../../UI/modals/TermsModal";
import { registrationReducer, initRegState } from "./Reducers/Signup";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";

const Signup = ({ changeSlide }) => {
  const [termsState, setTermsState] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    // console.log(e.target.checked);

    // console.log(password);
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
          <div className="col-sm-12 col-md-5 offset-md-1 px-5">
            <h3 className="color-primary  px-2 mt-3 mb-0 ">SIGN UP</h3>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitRegistration();
              }}
              className=" d-flex flex-column col-12"
            >
              <div className="mb-1 p-2 col-10 ">
                <label
                  htmlFor="firstName"
                  className="form-label fs-16 color-primary mb-0 fw-b"
                >
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name "
                  required
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-1 p-2 col-10 ">
                <label
                  htmlFor="inputEmail"
                  className="form-label fs-16 color-primary fw-b mb-0"
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
                  className="form-label fs-16 color-primary fw-b mb-0"
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
                  className="form-label fs-16 color-primary d-flex justify-content-between fw-b mb-0"
                >
                  Password*
                  <span>
                    <input
                      type="checkbox"
                      className="form-check-input  "
                      id="check"
                      onChange={passwordGenerator}
                    />
                    &nbsp;
                    <label className="form-check-label fs-16 fw-b mb-0">
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
                  className="form-label fs-16 color-primary fw-b mb-0"
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
                  className="form-check-input  "
                  id="check"
                  required
                  checked={termsState}
                  onChange={() => {
                    setTermsState(!termsState);
                  }}
                  disabled={!termsState}
                />

                <label className="form-check-label">
                  I Agree to the &nbsp;
                </label>

                <TermsModal
                  stateChanger={() => {
                    setTermsState(true);
                  }}
                />
                <a
                  className="color-primary fs-14 a-tag"
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
                >
                  Sign Up
                </button>
                <div className="text-center col-10">
                  <p className="mb-0 py-1 ">
                    Already user?
                    <Link className="a-tag  " to="/login">
                      &nbsp; Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div className=" d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end">
            <img src={homePageCircle} alt="circles image" className=" col-8" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
