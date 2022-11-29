import React, { useState, useReducer } from "react";
import homeImg from "../../assets/images/homeImg.png";
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
    if(!e.target.checked){
      setPasswordValue("");
      return;
    }
    var generator = require("generate-password-browser");

    var password = generator.generate({
      length: 10,
      numbers: true,
    });
    console.log(e.target.checked);

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
      <div class="container-fluid text-left">
        <div class="row content-section">
          <div className="col-sm-12 col-md-5 offset-md-1 p-5">
            <h2 className="color-primary fs-24 px-2 ">
              SIGN UP
            </h2>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitRegistration();
              }}
              className="mt-1 d-flex flex-column col-12"
            >
              <div className="mb-1 p-2 col-10 ">
                <label
                  htmlFor="firstName"
                  className="form-label fs-6 color-primary"
                >
                  Name
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1 p-2 col-10 ">
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-1 p-2 col-10 ">
                <label
                  htmlFor="password"
                  className="form-label fs-6 color-primary d-flex justify-content-between"
                >
                  Password
                  <span>
                    <input
                      type="checkbox"
                      className="form-check-input  "
                      id="check"
                      required
                      onChange={passwordGenerator}
                    />
                    &nbsp;
                    <label className="form-check-label">
                      Auto Generate password
                    </label>
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  required
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
              </div>
              <div className="mb-1 p-2 col-10">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fs-6 color-primary"
                >
                  Confirm Password
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
              <div className=" col-10 form-check justify-content-between mb-4 mx-2">
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
              <div className="d-flex flex-column px-2">
                <button
                  type="submit"
                  className="button-layout button-magic-mint me-3 col-10"
                >
                  Sign Up 
                </button>
                <div className="text-center col-10">
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

          <div className="col-sm-12 col-md-6 right-half p-5">
            <img src={homeImg} class="img-fluid p-5" alt="home page logo"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
