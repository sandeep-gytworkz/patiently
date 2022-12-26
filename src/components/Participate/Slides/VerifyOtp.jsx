import React, { useState } from "react";
import OtpInput from "react-otp-input";
import homePageCircle from "../../../assets/images/homePageCircle.svg";
import { Link } from "react-router-dom";
import Header from "../../../UI/Header/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../../../UI/Footer/Footer";
import "./VerifyOtp.css";
import rightWhiteArrow from "../../../assets/images/rightWhiteArrow.svg";
import greyRightArrow from "../../../assets/images/greyRightArrow.svg";

const VerifyOtp = ({ changeSlide, isForgotPassword = false }) => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (number) => {
    setOtp(number);
  };
  return (
    <>
      <div className="d-flex flex-column homePage-container">
        <Header />

        <div className="row flex-grow-1">
          <div className="col-xs-12 col-sm-6 flex-column align-items-center py-5 px-sm-5">
            <div className="d-flex flex-column align-items-center">
              <div className="py-3 d-flex flex-column col-sm-9 col-10">
                <p className="fs-20 fw-m pink-underline">
                  {isForgotPassword
                    ? "CODE VERIFICATION"
                    : "TWO FACTOR AUTHENTICATION"}
                </p>
                <p className="fs-18 dim-gray fw-r">
                  {isForgotPassword
                    ? "We have sent you a 6 digit code"
                    : "Hi John, We have sent you a six digit verification code to provided email/contact number"}
                </p>
                <p className="fs-18 dim-gray fw-r">
                  If you did not receive the code, Select resend code
                </p>
                <div className="d-none d-sm-block">
                  <OtpInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={6}
                    containerStyle="container-style"
                    inputStyle="input-style has-value"
                    focusStyle="focus-style"
                    separator={
                      <span>
                        <i className="px-2"></i>
                      </span>
                    }
                    isInputNum={true}
                    shouldAutoFocus={true}
                  />
                </div>
                <div className="d-block d-sm-none">
                  <OtpInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={6}
                    containerStyle="container-style"
                    inputStyle="input-style-sm has-value"
                    focusStyle="focus-style"
                    separator={
                      <span>
                        <i className="px-2"></i>
                      </span>
                    }
                    isInputNum={true}
                    shouldAutoFocus={true}
                  />
                </div>

                <div className="d-flex justify-content-between col-12 ">
                  <button className="button-a-tag fw-r">Resend Code</button>
                  <p className="fs-14 mb-0 fw-r ">Code expires in 00.30s</p>
                </div>
                <div className="d-flex flex-row mt-5 align-items-center justify-content-between flex-wrap-reverse">
                  <div className="col-sm-5 col-12 mb-3">
                    <Link
                      to="/"
                      className="me-sm-3 me-0 button-layout button-outlined a-tag-btn"
                    >
                      Cancel
                    </Link>
                  </div>
                  <div className="col-sm-7 col-12 mb-3">
                    <button
                      onClick={() => {
                        changeSlide();
                      }}
                      className="button-layout button-green w-100"
                      disabled={otp.length !== 6}
                    >
                      {isForgotPassword
                        ? "Verify code"
                        : "Continue to Questions"}
                      &nbsp;{" "}
                      {otp.length === 6 ? (
                        <img src={rightWhiteArrow} alt="right-arrow" />
                      ) : (
                        <img src={greyRightArrow} alt="right-arrow" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className=" d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end d-none d-sm-block ">
            <img src={homePageCircle} alt="circles image" className=" col-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
