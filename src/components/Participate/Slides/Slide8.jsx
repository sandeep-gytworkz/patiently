import React, { useState } from "react";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";

import checkListImg from "../../../assets/images/checkListImg.png";
import WhiteCard from "../../../UI/common-cards/WhiteCard";

const Slide8 = () => {
  return (
    <>
      <WhiteCard>
        <div className="d-flex flex-row ">
          <div className="col-6">
            <img
              src={checkListImg}
              alt="check list image"
              style={{ height: "25rem" }}
            />
          </div>
          <div className="col-6">
            <div className="py-5">
              <h2 className="pink fs-24 pb-3">Thanks John</h2>
              <p className="color-dark-grey fs-18 col-8">
                See a summary of the information you share and the data saved in
                your
                <span>
                  <a className="a-tag-common"> patient.ly profile</a>
                </span>
                .
              </p>
            </div>
            <div className="pt-5">
              <Link
                className="button-green button-layout a-tag-common "
                to="/view-profile"
              >
                Go to your profile
              </Link>
            </div>
          </div>
        </div>
      </WhiteCard>
    </>
  );
};

export default Slide8;
