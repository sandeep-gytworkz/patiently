import React, { useContext, useState } from "react";
import "../../styles/common/global.css";
import homePageCircle from "../../assets/images/homePageCircle.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../../UI/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import "./AdminLogin.css";

const AdminLogin = () => {
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
        <div className="container-fluid text-left">
          <div className="row content-section">
            <div className="col-6 flex-column align-items-center p-5">
              <form onSubmit={onSubmitHandler}>
                <div className="d-flex flex-column align-items-center">
                  <div className="py-3 d-flex flex-column col-8">
                    <p className="fs-20 fw-m login-underline">Admin Login</p>
                    <p className="fs-16 dim-gray fw-l">
                      Log in with details that you entered during your
                      registration
                    </p>
                    <label htmlFor="email" className="fs-16 fw-m">
                      Email*
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="Your Email..."
                      id="email"
                      className=" form-control p-2 input-class"
                    />
                  </div>

                  <div className="py-3 d-flex flex-column col-8">
                    <label htmlFor="password" className="fs-16 fw-m">
                      Password*
                    </label>
                    <input
                      required
                      type="password"
                      placeholder="Password..."
                      id="password"
                      className="form-control input-class p-2"
                    />
                  </div>
                  <div className="py-2 col-8 d-flex flex-row justify-content-between">
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
                  <div className="py-1 col-8">
                    <button
                      className="button-green button-layout w-100"
                      aria-current="page"
                    >
                      Login &nbsp; <AiOutlineArrowRight />
                    </button>
                  </div>
                  {/* <Footer alignment="justify-content-center" /> */}
                </div>
              </form>
            </div>

            <div style={{height: '100%'}} className="d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end">
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

export default AdminLogin;
