import React, { useState } from "react";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";

import checkListImg from "../../../assets/images/checkListImg.png";
import WhiteCard from "../../../UI/common-cards/WhiteCard";
import "./Slide8.css";

const Slide8 = () => {
  return (
    <>
      <WhiteCard>
        <div className="d-flex flex-row col-12 flex-wrap">
          <div className="col-sm-6 col-12 p-4 ">
            <img
              src={checkListImg}
              alt="check list image"
              // style={{ height: "25rem" }}
              className="col-sm-10 col-12 records-image"
            />
          </div>
          <div className="col-sm-6 col-12 thanks-div">
            <div className="py-sm-5 py-sm-2 col-10 col-sm-12">
              <h2 className="pink fs-24 pb-sm-3 pb-1 fw-m">Thanks John</h2>
              <p className="color-dark-grey fs-18 col-sm-9 col-12 fw-r">
                See a summary of the information you share and the data saved in
                your
                <span>
                  <a className="a-tag-common"> patient.ly profile</a>
                </span>
                .
              </p>
            </div>
            <div className="pt-sm-5 pt-2 mb-5 col-10">
              <Link
                className="button-green button-layout a-tag-common col-sm-4 col-12
            "
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
