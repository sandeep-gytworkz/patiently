import React from "react";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";
import WhiteCard from "../../../UI/common-cards/WhiteCard";

const Question2 = (props) => {
  return (
    <WhiteCard>
      <div>
        <h2 className="color-primary fs-24 fw-bold mb-2">QUESTION 2 </h2>
      </div>
      <div className="px-5">
        <p className="fs-24 ">
          Have you/your child/your parent been diagnosed with Celiac Disease by
          a physician or qualified medical provider?
        </p>
      </div>
      <div className="d-flex flex-row my-3 justify-content-between ">
        <div className="form-check form-check-inline d-flex flex-row align-items-center mx-4">
          <input
            className="form-check-input mx-2"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="Yes"
          />
          <label
            className="form-check-label radio-btn-label "
            htmlFor="inlineRadio1"
          >
            Yes
          </label>
        </div>
        <div className="form-check form-check-inline d-flex flex-row align-items-center mx-4">
          <input
            className="form-check-input mx-2"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="No"
          />
          <label
            className="form-check-label radio-btn-label"
            htmlFor="inlineRadio2"
          >
            No
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
            props.changeSlide(4);
          }}
        >
          Back
        </button>

        <button
          type="button"
          className="button-layout button-orange mx-2"
          onClick={() => {
            props.changeSlide(6);
          }}
        >
          Next
        </button>
      </div>
    </WhiteCard>
  );
};

export default Question2;
