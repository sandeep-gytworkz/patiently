import React, { useState } from "react";

import "./Participate.css";

import Slide6 from "./Slides/Slide6";
import Slide7 from "./Slides/Slide7";
import Slide8 from "./Slides/Slide8";

import Signup from "../Signup/Signup";
import TwoFactorAuth from "./Slides/TwoFactorAuth";
import Questions from "./Slides/Questions";
import Question1 from "./Slides/Question1";
import Question2 from "./Slides/Question2";
import Header from "../../UI/Header/Header";

const Participate = () => {
  const [slide, setSlide] = useState(1);
  const slideChangeHandler = (number) => {
    setSlide(number);
  };
  return (
    <>
      {
        (slide === 1 || slide === 2) 
        ?
        <div>
          {slide === 1 && <Signup changeSlide={slideChangeHandler} />}
          {slide === 2 && <TwoFactorAuth changeSlide={slideChangeHandler} />}
        </div>
        :
        <div
          className="d-flex flex-column"
          style={{ width: "100vw", height: "100vh", backgroundColor: "#FAFCFC" }}
        >
          <Header hideRight={true} />

          <div
            className="btn-toolbar justify-content-between"
            role="toolbar"
            aria-label="Toolbar with button groups"
            style={{
              paddingBottom: "10px",
            }}
          >
            <h3 className="text-center col-12 pt-3">Questions</h3>
            <div
              className="btn-group mx-auto"
              role="group"
              aria-label="First group"
            >
              <button
                type="button"
                className={`btn btn-secondary ${slide === 1 ? "active" : ""}`}
              >
                &#11044;
              </button>
              <button
                type="button"
                className={`btn btn-secondary ${
                  slide === 3 || slide === 4 || slide === 5 || slide === 6
                    ? "active"
                    : ""
                }`}
              >
                &#11044;
              </button>
              <button
                type="button"
                className={`btn btn-secondary ${slide === 7 ? "active" : ""}`}
              >
                &#11044;
              </button>
              <button
                type="button"
                className={`btn btn-secondary ${slide === 8 ? "active" : ""}`}
              >
                &#11044;
              </button>
            </div>
          </div>
          <div className="d-flex flex-row col-12 justify-content-center middle-container">
            {slide === 3 && <Questions changeSlide={slideChangeHandler} />}
            {slide === 4 && <Question1 changeSlide={slideChangeHandler} />}
            {slide === 5 && <Question2 changeSlide={slideChangeHandler} />}
            {slide === 6 && <Slide6 changeSlide={slideChangeHandler} />}
            {slide === 7 && <Slide7 changeSlide={slideChangeHandler} />}
            {slide === 8 && <Slide8 changeSlide={slideChangeHandler} />}
          </div>
        </div>
      }
    </>
  );
};

export default Participate;
