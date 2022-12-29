import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import homePageCircle from "../../../assets/images/homePageCircle.svg";
import "../../../styles/common/global.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import "./ForgotPasswordOtp.css";
import rightWhiteArrow from "../../../assets/images/rightWhiteArrow.svg";

const ForgotPasswordOtp = () => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/verify-otp");
  };

  const [email, setEmail] = useState("");

  return (
    <>
      <div className="d-flex flex-column homePage-container">
        <Header />

        <div className="row flex-grow-1 h-80">
          <div className="col-xs-12 col-sm-6 flex-column align-items-center py-5 px-sm-5">
            <form onSubmit={onSubmitHandler}>
              <div className="d-flex flex-column align-items-center">
                <div className=" d-flex flex-column col-sm-8 col-10">
                  <p className="fs-20 fw-m forgot-password-underline">
                    FORGOT PASSWORD
                  </p>
                  <p className="fs-18 dim-gray fw-r">
                    Provide you account’s email for which you want to reset your
                    password
                  </p>

                  <label
                    htmlFor="email"
                    className=" d-flex fs-16 fw-m color-primary mb-1 justify-content-between"
                  >
                    Email*
                  </label>

                  <input
                    type="email"
                    placeholder="mail@website.com"
                    id="email"
                    className=" form-control p-2 input-class"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="py-3 col-sm-8 col-10  ">
                  <button
                    className="button-green button-layout w-100"
                    aria-current="page"
                  >
                    Send OTP &nbsp;
                    <img src={rightWhiteArrow} alt="right-arrow" />
                  </button>
                </div>
                <Footer alignment="justify-content-center" />
              </div>
            </form>
            <div></div>
          </div>
          <div className=" d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end d-none d-sm-flex homepageCircle-div h-100">
            <img
              src={homePageCircle}
              alt="circles image"
              className="homepage-circle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordOtp;
