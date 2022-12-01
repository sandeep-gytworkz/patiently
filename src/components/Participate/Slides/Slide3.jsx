import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/common/global.css";

const Slide3 = (props) => {
  return (
    <div className="d-flex flex-column mx-5 my-2 col-8">
      <h2 className="color-primary fs-24 fw-bold mb-2">QUESTION 1 OF 4</h2>
      <h3 className="fs-24 fw-bold color-dark-grey mt-4">
        Please Select the age group that applies to you.
      </h3>
      <div className="col-8 py-5">
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
              18 to 64
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
              65 or Older
            </label>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center col-12 pt-5">
          <Link to="/" className="a-tag">
            Cancel
          </Link>

          <button
            type="button"
            className="button-layout button-magic-mint"
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
