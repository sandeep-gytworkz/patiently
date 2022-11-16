import React from "react";
import { Link } from "react-router-dom";

const Slide3 = (props) => {
  return (
    <div className="d-flex flex-column m-5">
      <h2>QUESTION 1 OF 4</h2>
      <h3>Please Select the age group that applies to you</h3>
      <div style={{ paddingBottom: "90px" }}>
        <div
          className="d-flex flex-row m-3"
          style={{ justifyContent: "space-between" }}
        >
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-5"
          >
            18 to 64
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-5"
          >
            65 or Older
          </button>
        </div>
      </div>
      <div
        className="d-flex flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <Link to="#">Cancel</Link>
        <Link to="#">Break</Link>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.changeSlide(4);
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Slide3;
