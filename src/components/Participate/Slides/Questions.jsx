import React from "react";
import WhiteCard from "../../../UI/common-cards/WhiteCard";
import { Link } from "react-router-dom";

const Questions = (props) => {
  return (
    <WhiteCard>
      <div>
        <h1>Hi first name, we're so glad you're here!</h1>
      </div>
      <div>
        <p>
          We need to ask you a couple questions to set up your Patiently profile
        </p>
      </div>
      <div className="d-flex flex-row">
        <Link to="/" className="button-layout button-outlined mx-2 a-tag-btn">
          Cancel
        </Link>
        <button
          className="mx-2 button-orange button-layout"
          onClick={() => {
            props.changeSlide(4);
          }}
        >
          Continue
        </button>
      </div>
    </WhiteCard>
  );
};

export default Questions;
