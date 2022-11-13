import React from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import "./Participate.css";
import homeImg from "../../assets/images/homeImg.png";

const Slide1 = (params) => {
  return (
    <div className="content-slide d-flex mt-3 p-5">
      <div className="col-4 h-80">
        <img
            src={homeImg}
            alt="home page logo"
            className="col-10 offset-sm-1"
          />
      </div>
      <div className="col-8 h-80">
        <h1 className="text-center">Registration form fields</h1>
      </div>
    </div>
  )
}

const Participate = () => {
  return (
    <div
      className="d-flex flex-column participate-now-page"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Header hideRight={true} />
      <div className="d-flex flex-row" style={{ height: "80%" }}>
        <div className="content-area col-10 h-100 offset-sm-1">
          <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
            <h3 className="text-center col-12 pt-5">Basic Info</h3>
            <div class="btn-group mx-auto" role="group" aria-label="First group">
              <button type="button" class="btn btn-secondary active">&#11044;</button>
              <button type="button" class="btn btn-secondary">&#11044;</button>
              <button type="button" class="btn btn-secondary">&#11044;</button>
              <button type="button" class="btn btn-secondary">&#11044;</button>
            </div>
          </div>
          <Slide1 />
        </div>
      </div>
      <div style={{ height: "5%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Participate;
