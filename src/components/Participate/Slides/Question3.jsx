import React from "react";
import { Link } from "react-router-dom";
import WhiteCard from "../../../UI/common-cards/WhiteCard";

const Question3 = (props) => {
  return (
    <WhiteCard>
      <div className="col-8 d-flex flex-column align-items-center justify-content-evenly">
        <div className="py-2">
          <h2 className="color-primary fs-24 fw-sb mb-2">QUESTION 3 </h2>
        </div>
        <div className="py-2">
          <p className="fs-24 fw-r text-center">
            Have you participated in a Celiac Disease clinical drug trial in the
            last 5 years?
          </p>
        </div>
        <div className="d-flex flex-row my-3 justify-content-between ">
          <div className="form-check form-check-inline d-flex flex-row align-items-center mx-4">
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
          <div className="form-check form-check-inline d-flex flex-row align-items-center mx-4">
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
        <div className="col-8">
          <select className="form-select" aria-label="Default select example">
            <option selected>Select</option>
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
            className="button-layout button-green mx-2"
            onClick={() => {
              props.changeSlide(7);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </WhiteCard>
  );
};

export default Question3;
