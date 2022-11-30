import React, { useState, useReducer } from "react";
import homeImg from "../../../assets/images/homeImg.png";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";
import TermsModal from "../../../UI/modals/TermsModal";
import { registrationReducer, initRegState } from "../Reducers/Participate";

const Slide1 = ({ changeSlide }) => {
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

  const passwordGenerator = () => {
    var generator = require("generate-password-browser");

    var password = generator.generate({
      length: 10,
      numbers: true,
      symbols: true,
      exclude: "{,},`,~,[,],|,/,:,\",(,),<,>,%,^,;,=,-,+,?"
    });

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
    <>
      <div className="col-7">
        <h2 className="color-primary fs-24 px-2 ">
          Register your account with us
        </h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submitRegistration();
          }}
          className="mt-1 d-flex flex-column col-12"
        >
          <div className="mb-1 p-2 col-6 ">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-1 p-2 col-6 ">
            <label
              htmlFor="password"
              className="form-label fs-6 color-primary"
            >
              Password
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
            <button
              className="button-a-tag p-0 link-success"
              type="button"
              onClick={passwordGenerator}
            >
              Generate Password
            </button>
          </div>
          <div className="mb-1 p-2 col-6">
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

      <div className="col-5">
        <img src={homeImg} alt="home page logo" style={{ height: "100%" }} />
      </div>
    </>
  );
};

export default Slide1;
