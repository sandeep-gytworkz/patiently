import React, { useState } from "react";
import OtpInput from "react-otp-input";
import homeImg from "../../../assets/images/homeImg.png";
import { Link } from "react-router-dom";
import Header from "../../../UI/Header/Header";
import { AiOutlineArrowRight } from "react-icons/ai";

const VerifyOtp = ({ changeSlide, isForgotPassword = false }) => {
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
              <div className="d-flex flex-column align-items-center">
                <div className="p-3 d-flex flex-column col-9">
                  <h4>
                    {isForgotPassword
                      ? "verify code"
                      : "Two Factor Authentication"}
                  </h4>
                  <p>
                    {isForgotPassword
                      ? "We have sent you a 6 digit code"
                      : "Hi John, We have sent you a six digit verification code to provided email/contact number"}
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
                  <div className="d-flex justify-content-between col-9 ">
                    <button className="button-a-tag">Resend Code</button>
                    <p className="fs-14 mb-0">Code expires in 00.30s</p>
                  </div>
                  <div className="d-flex flex-row mt-5 align-items-center  ">
                    <Link
                      to="/"
                      className="me-3 button-layout button-outlined a-tag-btn"
                    >
                      Cancel
                    </Link>
                    <button
                      onClick={() => {
                        changeSlide();
                      }}
                      className="button-layout button-primary"
                    >
                      {isForgotPassword
                        ? "Verify code"
                        : "Continue to Questions"}
                      &nbsp; <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 right-half p-5">
              <img
                src={homeImg}
                className="img-fluid p-5"
                alt="home page logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
