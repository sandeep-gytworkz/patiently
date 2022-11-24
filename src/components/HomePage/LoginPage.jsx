import React from "react";
import BackgroundCard from "../../UI/common-cards/BackgroundCard";
import WhiteCard from "../../UI/common-cards/WhiteCard";
import "../../styles/common/global.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/view-profile");
  };
  return (
    <BackgroundCard>
      <WhiteCard>
        <form onSubmit={onSubmitHandler}>
          <div className="d-flex flex-column align-items-center">
            <div className="p-3 d-flex flex-column col-8">
              <label htmlFor="email" className="fs-14 color-primary">
                Enter Email Id
              </label>
              <input
                type="email"
                placeholder="Enter email ID"
                id="email"
                className=" form-control p-2 input-class"
              />
            </div>

            <div className="p-3 d-flex flex-column col-8">
              <label htmlFor="password" className="fs-14 color-primary">
                Enter Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                className="form-control input-class p-2"
              />
            </div>
            <div className="py-3 px-2  d-flex justify-content-between">
              <button
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
            </div>
          </div>
        </form>
      </WhiteCard>
    </BackgroundCard>
  );
};

export default LoginPage;
