import React, { useState } from "react";
import Header from "../../UI/Header/Header";
import homeImg from "../../assets/images/homeImg.png";
import "../../styles/common/global.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

                    <label
                      htmlFor="password"
                      className=" d-flex fs-14 color-primary mb-1 justify-content-between"
                    >
                      Password*
                      <span>
                        <input
                          type="checkbox"
                          className="form-check-input  "
                          id="check"
                          onChange={passwordGenerator}
                        />
                        &nbsp;
                        <label className="form-check-label">
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

                  <div className="p-3 d-flex flex-column col-8">
                    <label
                      htmlFor="re-enterPassword"
                      className="fs-14 color-primary mb-1"
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
