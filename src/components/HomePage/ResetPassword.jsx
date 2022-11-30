import React from "react";
import Header from "../../UI/Header/Header";
import homeImg from "../../assets/images/homeImg.png";
import "../../styles/common/global.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/login");
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
                    <h5>Reset Password</h5>
                    <p className="fs-14">
                      Enter new password to reset your login password
                    </p>
                    <label htmlFor="email" className="fs-14 color-primary">
                      Password*
                    </label>
                    <input
                      type="text"
                      placeholder="Minimum 8 characters"
                      id="email"
                      className=" form-control p-2 input-class"
                    />
                  </div>

                  <div className="p-3 d-flex flex-column col-8">
                    <label htmlFor="password" className="fs-14 color-primary">
                      Re-enter Password*
                    </label>
                    <input
                      type="text"
                      placeholder="Minimum 8 characters"
                      id="password"
                      className="form-control input-class p-2"
                    />
                  </div>

                  <div className="py-3 col-8 d-flex flex-row justify-content-evenly ">
                    <Link
                      className=" button-layout button-outlined a-tag-btn "
                      aria-current="page"
                      to="/"
                    >
                      Cancel
                    </Link>
                    <button
                      className="button-orange button-layout "
                      aria-current="page"
                    >
                      Reset Password
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

export default ResetPassword;
