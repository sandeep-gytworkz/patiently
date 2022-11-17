import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/common/global.css";

const Slide3 = (props) => {
  return (
    <div className="d-flex flex-column mx-5 my-2">
      <h2 className="color-primary fs-24 fw-bold mb-2">QUESTION 1 OF 4</h2>
      <h3 className="fs-24 fw-bold color-dark-grey mt-4">
        Please Select the age group that applies to you.
      </h3>
      <div className="col-10 py-5">
        <div className="pb-5 col-12">
          <div
            className="d-flex flex-row my-3 "
            style={{ justifyContent: "space-between" }}
          >
            <button
              type="button"
              className="button-layout button-outlined px-5 "
            >
              18 to 64
            </button>
            <button
              type="button"
              className="button-layout button-outlined  px-5"
            >
              65 or Older
            </button>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center col-12 pt-5">
          <Link to="#" className="a-tag">
            Cancel
          </Link>
          <Link to="#" className="a-tag">
            Break
          </Link>
          <button
            type="button"
            className="button-layout button-contained"
            onClick={() => {
              props.changeSlide(4);
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
