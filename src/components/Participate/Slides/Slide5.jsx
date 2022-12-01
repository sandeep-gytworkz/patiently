import React from "react";
import { Link } from "react-router-dom";

const Slide5 = ({ changeSlide }) => {
  return (
    <div className="d-flex flex-column mx-5 my-2 col-8">
      <h2 className="color-primary fs-24 fw-bold mb-2">QUESTION 3 OF 4</h2>
      <h3 className="fs-24 fw-bold color-dark-grey mt-4">
        Have you ever been treated in an emergency room ?
      </h3>
      <div className=" col-8 py-5">
        <div className="pb-5 col-12">
          <div className="d-flex flex-row my-3 justify-content-between ">
            <input
              type="radio"
              class="btn-check"
              name="options"
              id="option1"
              autocomplete="off"
            />
            <label
              class="button-layout button-outlined-q radio-button"
              for="option1"
            >
              Yes
            </label>

            <input
              type="radio"
              class="btn-check"
              name="options"
              id="option2"
              autocomplete="off"
            />
            <label
              class="button-layout button-outlined-q radio-button"
              for="option2"
            >
              No
            </label>
          </div>
        </div>
        <div className="d-flex flex-row pt-5 justify-content-between align-items-center">
          <Link to="/" className="a-tag">
            Cancel
          </Link>
          <button
            className="a-tag button-virtual"
            onClick={() => {
              changeSlide(4);
            }}
          >
            Back
          </button>
          <button
            type="button"
            className="button-layout button-magic-mint"
            onClick={() => {
              changeSlide(6);
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
