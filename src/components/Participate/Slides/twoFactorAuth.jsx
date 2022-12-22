import React, { useState } from "react";
import OtpInput from "react-otp-input";
import homePageCircle from "../../../assets/images/homePageCircle.svg";
import { Link } from "react-router-dom";
import Header from "../../../UI/Header/Header";

const TwoFactorAuth = ({ changeSlide }) => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (number) => {
    setOtp(number);
  };
  return (
    <>
      <div className="d-flex flex-column homePage-container">
        <Header />
        <div className="container-fluid text-left">
          <div className="row content-section">
            <div className="col-6 flex-column align-items-center p-5">
              <h4>TWO FACTOR AUTHENTICATION</h4>
              <p>
                Hi John, You have received 6 digit code in your provided
                email/contact number.
              </p>
              <p>If you did not receive the code, Select resend code</p>
              <div>
                <OtpInput
                  value={otp}
                  onChange={handleOtpChange}
                  numInputs={6}
                  containerStyle={{ padding: "10px 0" }}
                  inputStyle={{
                    width: "50px",
                    height: "60px",
                    marginRight: "10px",
                    fontSize: "2rem",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,0,0,0.3)",
                  }}
                />
              </div>
              <div className="d-flex flex-row mt-5 align-items-center">
                <Link to="/" className="me-5 a-tag">
                  Cancel
                </Link>
                <button
                  onClick={() => {
                    changeSlide(3);
                  }}
                  className="button-layout button-green"
                >
                  Continue to Questions
                </button>
              </div>
            </div>
            <div className=" d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end">
              <img
                src={homePageCircle}
                alt="circles image"
                className=" col-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoFactorAuth;
