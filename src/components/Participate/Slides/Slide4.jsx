import React from "react";

const Slide4 = ({ changeSlide }) => {
  return (
    <div className="d-flex flex-column m-5">
      <h2>QUESTION 2 OF 4</h2>
      <h3>Please Select your gender</h3>
      <div style={{ paddingBottom: "90px" }}>
        <div
          className="d-flex flex-row m-3"
          style={{ justifyContent: "space-between" }}
        >
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-5 me-5"
          >
            Male
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-5"
          >
            Female
          </button>
        </div>
      </div>
      <div
        className="d-flex flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <a href="#">Cancel</a>
        <a href="#">Break</a>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            changeSlide(5);
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Slide4;
