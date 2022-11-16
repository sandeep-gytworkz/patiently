import React, { useState } from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import "./Participate.css";
import Slide1 from "./Slides/Slide1";
import Slide3 from "./Slides/Slide3";
import Slide4 from "./Slides/Slide4";
import Slide5 from "./Slides/Slide5";
import Slide6 from "./Slides/Slide6";
import Slide7 from "./Slides/Slide7";
import Slide8 from "./Slides/Slide8";

const Participate = () => {
  const [slide, setSlide] = useState(1);
  const slideChangeHandler = (number) => {
    setSlide(number);
  };
  return (
    <div
      className="d-flex flex-column participate-now-page"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Header hideRight={true} />
      <div
        className="d-flex "
        style={{ height: "80%", backgroundColor: "#F8FEFB" }}
      >
        <div
          className="content-area col-10 offset-sm-1 d-flex flex-column"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div
            className="btn-toolbar justify-content-between"
            role="toolbar"
            aria-label="Toolbar with button groups"
            style={{
              backgroundColor: "#F8FEFB",

              paddingBottom: "10px",
            }}
          >
            <h3 className="text-center col-12 pt-3">Basic Info</h3>
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
                className={`btn btn-secondary ${slide === 3 ? "active" : ""}`}
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
          <div
            style={{
              height: "75%",
              boxShadow: "0px 3px 6px #00000029",
              padding: "30px 12px",
            }}
            className="d-flex flex-row"
          >
            {slide === 1 && <Slide1 changeSlide={slideChangeHandler} />}
            {slide === 3 && <Slide3 changeSlide={slideChangeHandler} />}
            {slide === 4 && <Slide4 changeSlide={slideChangeHandler} />}
            {slide === 5 && <Slide5 changeSlide={slideChangeHandler} />}
            {slide === 6 && <Slide6 changeSlide={slideChangeHandler} />}
            {slide === 7 && <Slide7 changeSlide={slideChangeHandler} />}
            {slide === 8 && <Slide8 changeSlide={slideChangeHandler} />}
          </div>
        </div>
      </div>
      <div style={{ height: "5%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Participate;
