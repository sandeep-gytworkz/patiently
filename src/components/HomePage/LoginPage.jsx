import React from "react";
import BackgroundCard from "../../UI/common-cards/BackgroundCard";
import WhiteCard from "../../UI/common-cards/WhiteCard";
import "../../styles/common/global.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <BackgroundCard>
      <WhiteCard>
        <form>
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
                type="text"
                placeholder="Enter Password"
                id="password"
                className="form-control input-class p-2"
              />
            </div>
            <div className="py-3 px-2  d-flex justify-content-between">
              <button
                type="submit"
                className="button-contained button-layout me-2"
              >
                Login
              </button>
              <Link
                className="button-contained button-layout link-class"
                to="/participate-now"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </WhiteCard>
    </BackgroundCard>
  );
};

export default LoginPage;
