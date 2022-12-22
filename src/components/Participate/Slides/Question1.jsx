import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/common/global.css";
import WhiteCard from "../../../UI/common-cards/WhiteCard";
import CancelQuestionModal from "../../../UI/modals/CancelQuestionModal";

const Question1 = (props) => {
  return (
    <>
      <CancelQuestionModal />
      <WhiteCard>
        <div className="col-sm-8 col-10 d-flex flex-column align-items-center justify-content-evenly">
          <div className="py-2">
            <h2 className="color-primary fs-32 fw-sb mb-2">Question 1 </h2>
          </div>
          <div className="py-2">
            <p className="fs-24 fw-r text-center">
              Are you signing up for yourself or for your child/parent?
            </p>
          </div>
          <div className="d-flex flex-row my-3 justify-content-between ">
            <div className="form-check form-check-inline d-flex flex-row align-items-center mx-sm-4 mx-0">
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
            <div className="form-check form-check-inline d-flex flex-row align-items-center mx-sm-4 mx-0">
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

          <div className="d-flex flex-row justify-content-center align-items-center col-12 pt-5 flex-wrap">
            <button
              type="button"
              className="button-layout button-outlined mx-2 col-sm-3 col-12 order-3 mb-3 order-sm-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Cancel
            </button>

            <button
              type="button"
              className="button-layout button-outlined mx-2 col-sm-3 col-12 order-2 mb-3 order-sm-2"
              onClick={() => {
                props.changeSlide(3);
              }}
            >
              Back
            </button>

            <button
              type="button"
              className="button-layout button-green mx-2 col-sm-3 col-12 order-1 mb-3 order-sm-3"
              onClick={() => {
                props.changeSlide(5);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </WhiteCard>
    </>
  );
};

export default Question1;
