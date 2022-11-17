import React from "react";

const Slide5 = ({ changeSlide }) => {
  return (
    <div className="d-flex flex-column mx-5 my-2">
      <h2 className="color-primary fs-24 fw-bold mb-2">QUESTION 3 OF 4</h2>
      <h3 className="fs-24 fw-bold color-dark-grey mt-4">
        Have you ever been treated in an emergency room ?
      </h3>
      <div className="py-5">
        <div className="d-flex flex-row my-3 justify-content-evenly col-10">
          <button type="button" className="button-layout button-outlined px-5 ">
            No
          </button>
          <button type="button" className="button-layout button-outlined px-5 ">
            yes
          </button>
        </div>
      </div>
      <div className="d-flex flex-row pt-5 justify-content-between col-10">
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
            changeSlide(6);
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Slide5;
