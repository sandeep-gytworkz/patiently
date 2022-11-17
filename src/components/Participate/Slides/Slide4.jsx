import React from "react";
import "../../../styles/common/global.css";

const Slide4 = ({ changeSlide }) => {
  return (
    <div className="d-flex flex-column mx-5 my-2 col-5">
      <h2 className="color-primary fs-24 fw-bold mb-2">QUESTION 2 OF 4</h2>
      <h3 className="fs-24 fw-bold color-dark-grey mt-4">
        Please Select your gender
      </h3>
      <div className="py-5">
        <div className="d-flex flex-row my-3 justify-content-between">
          <button type="button" className="button-layout button-outlined px-5 ">
            Male
          </button>
          <button type="button" className="button-layout button-outlined px-5 ">
            Female
          </button>
        </div>
      </div>
      <div className="d-flex flex-row pt-5 justify-content-between align-items-center">
        <a href="#" className="a-tag">
          Cancel
        </a>
        <a href="#" className="a-tag">
          Break
        </a>
        <button
          type="button"
          className="button-layout button-contained"
          onClick={() => {
            changeSlide(5);
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Slide4;
