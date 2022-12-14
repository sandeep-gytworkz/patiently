import React, { useState } from "react";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";

import checkListImg from "../../../assets/images/checkListImg.png";

const Slide8 = () => {
  return (
    <>
      <div className="d-flex flex-row ">
        <div className="col-6">
          <img
            src={checkListImg}
            alt="check list image"
            style={{ height: "90%", margin: "5%" }}
          />
        </div>
        <div className="col-6">
          <div className="py-5">
            <h2 className="color-primary fs-24 pb-3">Thanks John</h2>
            <p className="color-dark-grey fs-16 col-8">
              See a summary of the information you share and the data saved in
              your{" "}
              <span>
                <a className="a-tag"> patient.ly profile</a>
              </span>
              .
            </p>
          </div>
          <div className="pt-5">
            <Link
              className="button-magic-mint button-layout a-tag "
              to="/view-profile"
            >
              Go to your profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide8;
