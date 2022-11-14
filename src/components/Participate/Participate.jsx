import React from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import "./Participate.css";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";
import Slide4 from "./Slides/Slide4";
import Slide5 from "./Slides/Slide5";

const Participate = () => {
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
            class="btn-toolbar justify-content-between"
            role="toolbar"
            aria-label="Toolbar with button groups"
            style={{
              backgroundColor: "#F8FEFB",
              height: "25%",
            }}
          >
            <h3 className="text-center col-12 pt-5">Basic Info</h3>
            <div
              class="btn-group mx-auto"
              role="group"
              aria-label="First group"
            >
              <button type="button" class="btn btn-secondary active">
                &#11044;
              </button>
              <button type="button" class="btn btn-secondary">
                &#11044;
              </button>
              <button type="button" class="btn btn-secondary">
                &#11044;
              </button>
              <button type="button" class="btn btn-secondary">
                &#11044;
              </button>
            </div>
          </div>
          <div style={{ height: "75%" }} className="d-flex flex-row">
            <Slide1 />
            {/* <Slide2 /> */}
            {/* <Slide3 /> */}
            {/* <Slide4 /> */}
            {/* <Slide5 /> */}
          </div>
        </div>
      </div>
      <div></div>
      <div style={{ height: "5%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Participate;
