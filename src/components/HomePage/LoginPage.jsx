import React, { useState } from "react";
import "../../styles/common/global.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../UI/Header/Header";
import homeImg from "../../assets/images/homeImg.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/view-profile");
  };
  const forgotPasswordHandler = () => {
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
                  <div className="p-3 d-flex flex-column col-8">
                    <h5>Login</h5>
                    <p className="fs-14">
                      Log in with details that you entered during your
                      registration
                    </p>
                    <label htmlFor="email" className="fs-14 color-primary">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="mail@website.com"
                      id="email"
                      className=" form-control p-2 input-class"
                    />
                  </div>

                  <div className="p-3 d-flex flex-column col-8">
                    <label htmlFor="password" className="fs-14 color-primary">
                      Password*
                    </label>
                    <input
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
                        className="form-check-label fs-14"
                        htmlFor="flexCheckChecked"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      <button
                        className="button-a-tag fs-14"
                        onClick={forgotPasswordHandler}
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </div>
                  <div className="py-1 col-8  ">
                    <button
                      className="button-orange button-layout w-100"
                      aria-current="page"
                    >
                      Login &nbsp; <AiOutlineArrowRight />
                    </button>
                  </div>
                  <div>
                    <div className="d-flex flex-row  align-items-center">
                      <p className="mb-0 py-2 fs-14">Not Registered?</p>
                      <Link
                        to="/participate-now "
                        className="button-a-tag fs-14"
                      >
                        &nbsp; Create an Account
                      </Link>
                    </div>
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

export default LoginPage;
