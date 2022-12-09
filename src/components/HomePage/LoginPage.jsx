import React, { useContext, useState } from "react";
import "../../styles/common/global.css";
import Header from "../../UI/Header/Header";
import homePageCircle from "../../assets/images/homePageCircle.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../../UI/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const LoginPage = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    appContext.appDispatch({ type: "login" });
    navigate("/view-profile");
  };
  const forgotPasswordHandler = () => {
    navigate("/forgot-password-otp");
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
                  <div className="py-3 d-flex flex-column col-8">
                    <p className="fs-20 fw-b">Login</p>
                    <p className="fs-16 dim-gray">
                      Log in with details that you entered during your
                      registration
                    </p>
                    <label htmlFor="email" className="fs-16 fw-b">
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

                  <div className="py-3 d-flex flex-column col-8">
                    <label htmlFor="password" className="fs-16 fw-b">
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
                  <div className="py-2 col-8 d-flex flex-row justify-content-between">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label fs-16 fw-b"
                        htmlFor="flexCheckChecked"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      <button
                        className="button-a-tag fs-16 "
                        onClick={forgotPasswordHandler}
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </div>
                  <div className="py-1 col-8  ">
                    <button
                      className="button-green button-layout w-100"
                      aria-current="page"
                    >
                      Login &nbsp; <AiOutlineArrowRight />
                    </button>
                  </div>
                  <div>
                    <div className="d-flex flex-row  align-items-center">
                      <p className="mb-0 py-2 fs-16 fw-b">Not Registered?</p>
                      <Link
                        to="/participate-now "
                        className="button-a-tag fs-16"
                      >
                        &nbsp; Create an Account
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
              <Footer />
            </div>

            <div className=" d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end">
              <img
                src={homePageCircle}
                alt="circles image"
                className=" col-8"
              />
            </div>
            {/* <div className="py-3 px-2  d-flex justify-content-between">
              <button
                onClick={() => {}}
                className="btn button-contained button-layout me-2"
                aria-current="page"
              >
                Login
              </button>
              <div className="d-flex flex-row  align-items-center">
                <p className="mb-0 py-2">New user?</p>
                <Link to="/participate-now" className="a-tag">
                  &nbsp; Register
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
