import React from "react";

import WhiteCard from "../../../components/Card/WhiteCard";
import CancelQuestionModal from "../../../components/Modal/CancelQuestionModal";

const Question3 = (props) => {
  return (
    <>
      <CancelQuestionModal />
      <WhiteCard>
        <div className="col-sm-8 col-10 d-flex flex-column align-items-center justify-content-evenly">
          <div className="py-2">
            <h2 className="color-primary fs-24 fw-sb mb-2">Question 3 </h2>
          </div>
          <div className="py-2">
            <p className="fs-24 fw-r text-center">
              Have you participated in a Celiac Disease clinical drug trial in
              the last 5 years?
            </p>
          </div>
          <div className="d-flex flex-row my-3 justify-content-between ">
            <div className="form-check form-check-inline d-flex flex-row align-items-center mx-sm-4 mx-0">
              <input
                className="form-check-input mx-2 radio-btn"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Yes"
              />
              <label
                className="form-check-label radio-btn-label dark-blue "
                htmlFor="inlineRadio1"
              >
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline d-flex flex-row align-items-center mx-sm-4 mx-0">
              <input
                className="form-check-input mx-2 radio-btn"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="No"
              />
              <label
                className="form-check-label radio-btn-label dark-blue"
                htmlFor="inlineRadio2"
              >
                No
              </label>
            </div>
          </div>
          <div className="col-sm-10 col-12">
            <p className="mb-1 fw-semibold">Select celiac disease</p>
            <select
              className="form-select selection-form "
              aria-label="Default select example"
            >
              <option disabled selected hidden>
                Select
              </option>
              <option value=" 9 Meters Biopharma/Larazotide">
                9 Meters Biopharma/Larazotide
              </option>
              <option value="Immunogenics/Latiglutenase">
                Immunogenics/Latiglutenase
              </option>
              <option value="Takeda/TAK-062">Takeda/TAK-062</option>
              <option value="Provention Bio/PROACTIVE">
                Provention Bio/PROACTIVE
              </option>
            </select>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center col-12 pt-5 flex-wrap">
            <button
              type="button"
              className="button-layout button-outlined mx-2 col-sm-3 col-12 order-3 mb-3 order-sm-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-backdrop="false"
            >
              Cancel
            </button>
            <button
              type="button"
              className="button-layout button-outlined mx-2 col-sm-3 col-12 order-2 mb-3 order-sm-2"
              onClick={() => {
                props.changeSlide(5);
              }}
            >
              Back
            </button>

            <button
              type="button"
              className="button-layout button-green mx-2 col-sm-3 col-12 order-1 mb-3 order-sm-3"
              onClick={() => {
                props.changeSlide(7);
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

export default Question3;
