import React, { useState } from "react";
import "../../styles/common/global.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../UI/Header/Header";
import homeImg from "../../assets/images/homeImg.png";

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
            <div className="col-sm-12 col-md-5 offset-md-1 p-5">
              <h2 className="color-primary fs-24 px-2">LOGIN</h2>
              <p className="px-2">
                <small>
                  Log in with details that you entered during your registration
                </small>
              </p>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  onSubmitHandler();
                }}
                className="mt-1 d-flex flex-column col-12 mt-5"
              >
                <div className="mb-1 p-2 col-10 ">
                  <label
                    htmlFor="inputEmail"
                    className="form-label fs-6 color-primary"
                  >
                    Email
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
                <div className="mb-1 p-2 col-10 ">
                  <label
                    htmlFor="password"
                    className="form-label fs-6 color-primary d-flex justify-content-between"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column px-2">
                  <button
                    type="submit"
                    className="button-layout button-primary me-3 col-10"
                  >
                    Login
                  </button>
                  <div className="text-center col-10">
                    <p className="mb-0 py-2">
                      Not registered?
                      <Link className="a-tag " to="/participate-now">
                        &nbsp; Create Account
                      </Link>
                    </p>
                  </div>
                </div>
              </form>

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
      </div>
    </>
  );
};

export default LoginPage;
