import React from "react";
import { Link } from "react-router-dom";
import WhiteCard from "../../../UI/common-cards/WhiteCard";

const Question4 = (props) => {
  return (
    <WhiteCard>
      <div>
        <h2 className="color-primary fs-24 fw-bold mb-2">QUESTION 4 </h2>
      </div>
      <div className="px-5">
        <p className="fs-24 ">
          We may need to contact you if we have questions about your medical
          records. Would you prefer to be contacted by email or phone?
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
            Email
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
            Phone
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
            props.changeSlide(6);
          }}
        >
          Back
        </button>

        <button
          type="button"
          className="button-layout button-orange mx-2"
          onClick={() => {
            props.changeSlide(8);
          }}
        >
          Next
        </button>
      </div>
    </WhiteCard>
  );
};

export default Question4;