import React, { useState } from "react";
import Header from "../../UI/Header/Header";
import homeImg from "../../assets/images/homeImg.png";
import "../../styles/common/global.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ForgotPasswordOtp = () => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/verify-otp");
  };

  return (
    <>
      <div className="d-flex flex-column homePage-container">
        <Header />
        <div className="container-fluid text-left">
          <div className="row content-section">
            <div className="col-6 flex-column align-items-center p-5">
              <form onSubmit={onSubmitHandler}>
                <div className="d-flex flex-column align-items-center">
                  <div className=" d-flex flex-column col-8">
                    <h5>Forgot Password</h5>
                    <p className="fs-14">
                      Provide you account’s email for which you want to reset
                      your password
                    </p>

                    <label
                      htmlFor="email"
                      className=" d-flex fs-14 color-primary mb-1 justify-content-between"
                    >
                      Email*
                    </label>

                    <input
                      type="email"
                      placeholder="mail@website.com"
                      id="email"
                      className=" form-control p-2 input-class"
                    />
                  </div>

                  <div className="py-3 col-8  ">
                    <button
                      className="button-orange button-layout w-100"
                      aria-current="page"
                    >
                      Send OTP &nbsp; <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </form>
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

export default ForgotPasswordOtp;
