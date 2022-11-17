import React from "react";
import BackgroundCard from "../../UI/common-cards/BackgroundCard";
import WhiteCard from "../../UI/common-cards/WhiteCard";
import "../../styles/common/global.css";

const LoginPage = () => {
  return (
    <BackgroundCard>
      <WhiteCard>
        <div className="d-flex flex-column align-items-center">
          <div className="p-3 d-flex flex-column col-8">
            <label htmlFor="email" className="fs-14 color-primary">
              Enter Email Id
            </label>
            <input
              type="email"
              placeholder="Enter email ID"
              id="email"
              className="button-outlined p-2"
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
              className="button-outlined p-2"
            />
          </div>
          <div className="p-3">
            <button type="submit" className="button-contained button-layout">
              Login
            </button>
          </div>
        </div>
      </WhiteCard>
    </BackgroundCard>
  );
};

export default LoginPage;
