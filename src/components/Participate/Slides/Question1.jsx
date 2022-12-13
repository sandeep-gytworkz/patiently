import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/common/global.css";
import WhiteCard from "../../../UI/common-cards/WhiteCard";

const Question1 = (props) => {
  return (
    <WhiteCard>
      <div className="col-8 d-flex flex-column align-items-center justify-content-evenly">
        <div className="py-2">
          <h2 className="color-primary fs-24 fw-sb mb-2">QUESTION 1 </h2>
        </div>
        <div className="py-2">
          <p className="fs-24 fw-r text-center">
            Are you signing up for yourself or for your child/parent?
          </p>
        </div>
        <div className="d-flex flex-row my-3 justify-content-between ">
          <div className="form-check form-check-inline d-flex flex-row align-items-center mx-4">
            <input
              className="form-check-input mx-2 radio-btn"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="Child"
            />
            <label
              className="form-check-label radio-btn-label dark-blue"
              htmlFor="inlineRadio1"
            >
              Child
            </label>
          </div>
          <div className="form-check form-check-inline d-flex flex-row align-items-center mx-4">
            <input
              className="form-check-input mx-2 radio-btn"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="Parent"
            />
            <label
              className="form-check-label radio-btn-label dark-blue"
              htmlFor="inlineRadio2"
            >
              Parent
            </label>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center col-12 pt-5">
          <Link to="/" className="button-layout button-outlined mx-2 a-tag-btn">
            Cancel
          </Link>
          <button
            type="button"
            className="button-layout button-outlined mx-2"
            onClick={() => {
              props.changeSlide(3);
            }}
          >
            Back
          </button>

          <button
            type="button"
            className="button-layout button-green mx-2"
            onClick={() => {
              props.changeSlide(5);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </WhiteCard>
  );
};

export default Question1;
