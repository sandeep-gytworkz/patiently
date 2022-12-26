import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import homePageCircle from "../../../assets/images/homePageCircle.svg";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";

const ResetPassword = () => {
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const passwordGenerator = (e) => {
    if (!e.target.checked) {
      setPasswordValue("");
      return;
    }
    var generator = require("generate-password-browser");

    var password = generator.generate({
      length: 10,
      numbers: true,
      symbols: true,
      exclude: '{,},`,~,[,],|,/,:,",(,),<,>,%,^,;,=,-,+,?',
    });
    // console.log(e.target.checked);

    // console.log(password);
    setPasswordValue(password);
  };

  return (
    <>
      <div className="d-flex flex-column homePage-container">
        <Header />

        <div className="row flex-grow-1">
          <div className="col-xs-12 col-sm-6 flex-column align-items-center py-5 px-sm-5">
            <form onSubmit={onSubmitHandler}>
              <div className="d-flex flex-column align-items-center">
                <div className="py-3 d-flex flex-column col-sm-8 col-10">
                  <p className="fs-20 fw-m pink-underline">RESET PASSWORD</p>
                  <p className="fs-14 dim-gray fw-l">
                    Enter new password to reset your login password
                  </p>

                  <label
                    htmlFor="password"
                    className=" d-flex fs-16 fw-m color-primary mb-1 justify-content-between"
                  >
                    Password*
                    <span>
                      <input
                        type="checkbox"
                        className="form-check-input  checkbox-input"
                        id="check"
                        onChange={passwordGenerator}
                      />
                      &nbsp;
                      <label className="form-check-label fw-m ">
                        Auto Generate password
                      </label>
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="Minimum 8 characters"
                    id="password"
                    className=" form-control p-2 input-class"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                </div>

                <div className="py-3 d-flex flex-column col-sm-8 col-10">
                  <label
                    htmlFor="re-enterPassword"
                    className="fs-16 color-primary mb-1 fw-m"
                  >
                    Re-enter Password*
                  </label>
                  <input
                    type="text"
                    placeholder="Minimum 8 characters"
                    id="re-enterPassword"
                    className="form-control input-class p-2"
                  />
                </div>

                <div className="py-3 col-sm-8 col-10 d-flex flex-row justify-content-between flex-wrap-reverse">
                  <Link
                    className=" button-layout button-outlined a-tag-btn col-sm-4 col-12 mb-3"
                    aria-current="page"
                    to="/"
                  >
                    Cancel
                  </Link>
                  <button
                    className="button-green button-layout col-sm-6 col-12 mb-3 "
                    aria-current="page"
                  >
                    Reset Password
                  </button>
                </div>
                <Footer />
              </div>
            </form>
          </div>
          <div className=" d-flex flex-row col-sm-12 col-md-6 right-half ps-5 bg-green justify-content-end d-none d-sm-block">
            <img src={homePageCircle} alt="circles image" className=" col-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
