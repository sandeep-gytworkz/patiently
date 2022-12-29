import React, { useContext, useState } from "react";
import "../../styles/common/global.css";
import Header from "../../components/Header/Header";
import homePageCircle from "../../assets/images/homePageCircle.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import "./Login.css";
import rightWhiteArrow from "../../assets/images/rightWhiteArrow.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await appContext.appDispatch({ type: "login" });
    navigate("/view-profile");
  };
  const forgotPasswordHandler = () => {
    navigate("/forgot-password-otp");
  };
  return (
    <>
      <div className="d-flex flex-column homePage-container">
        <Header />

        <div className="row flex-grow-1 h-80">
          <div className=" col-xs-12 col-sm-6 flex-column align-items-center py-5 px-sm-5">
            <form onSubmit={onSubmitHandler}>
              <div className="d-flex flex-column align-items-center">
                <div className="py-3 d-flex flex-column col-sm-8 col-10">
                  <p className="fs-20 fw-m user-login-underline">LOGIN</p>
                  <p className="fs-16 dim-gray fw-l">
                    Log in with details that you entered during your
                    registration
                  </p>
                  <label htmlFor="email" className="fs-16 fw-m mb-2">
                    Email*
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="mail@website.com"
                    id="email"
                    className=" form-control p-2 input-class"
                  />
                </div>

                <div className="py-3 d-flex flex-column col-sm-8 col-10">
                  <label htmlFor="password" className="fs-16 fw-m mb-2">
                    Password*
                  </label>
                  <input
                    required
                    type="password"
                    placeholder="Minimum 8 characters"
                    id="password"
                    className="form-control input-class p-2"
                  />
                </div>
                <div className="py-2 col-sm-8 col-10 d-flex flex-row justify-content-between">
                  <div className="form-check">
                    <input
                      className="form-check-input checkbox-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label fs-16 fw-r "
                      htmlFor="flexCheckChecked"
                    >
                      Remember me
                    </label>
                  </div>
                  <div>
                    <button
                      className=" fs-16 fw-r button-a-tag "
                      onClick={forgotPasswordHandler}
                    >
                      Forgot Password?
                    </button>
                  </div>
                </div>
                <div className="py-1 col-sm-8  col-10">
                  <button
                    className="button-green button-layout w-100 fs-18 fw-m"
                    aria-current="page"
                  >
                    Login &nbsp; <img src={rightWhiteArrow} alt="right-arrow" />
                  </button>
                </div>
                <div className="py-1 col-sm-8  col-10">
                  <div className="d-flex flex-row  align-items-center justify-content-center">
                    <p className="mb-0 py-2 fs-16 fw-r">Not Registered?</p>
                    <Link
                      to="/participate-now "
                      className="a-tag-link fs-16 fw-m px-0"
                    >
                      &nbsp; Create an Account
                    </Link>
                  </div>
                </div>
                <div className=" col-sm-8  col-12 d-flex justify-content-center">
                  <Footer alignment="justify-content-center" />
                </div>
              </div>
            </form>
          </div>

          <div className=" d-flex flex-row d-none d-sm-flex col-sm-6 right-half ps-5 bg-green justify-content-end homepageCircle-div h-100">
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

export default LoginPage;