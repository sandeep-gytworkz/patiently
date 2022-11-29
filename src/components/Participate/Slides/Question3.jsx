import React from "react";
import { Link } from "react-router-dom";
import WhiteCard from "../../../UI/common-cards/WhiteCard";

const Question3 = (props) => {
  return (
    <WhiteCard>
      <div>
        <h2 className="color-primary fs-24 fw-bold mb-2">QUESTION 3 </h2>
      </div>
      <div>
        <p className="fs-24">
          Have you participated in a Celiac Disease clinical drug trial in the
          last 5 years?
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
      <div className="dropdown d-flex flex-column col-8">
        <label htmlFor="dropdownMenuButton1">Select celiac disease </label>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ paddingRight: "35rem" }}
        >
          Select
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-row justify-content-center align-items-center col-12 pt-5">
        <Link to="/" className="button-layout button-outlined mx-2 a-tag-btn">
          Cancel
        </Link>
        <button
          type="button"
          className="button-layout button-outlined mx-2"
          onClick={() => {
            props.changeSlide(5);
          }}
        >
          Back
        </button>

        <button
          type="button"
          className="button-layout button-orange mx-2"
          onClick={() => {
            props.changeSlide(7);
          }}
        >
          Next
        </button>
      </div>
    </WhiteCard>
  );
};

export default Question3;
