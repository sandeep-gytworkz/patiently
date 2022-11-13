import React from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import "./HomePage.css";
import homeImg from "../../assets/images/homeImg.png";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

const Homepage = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Header />
      <div className="d-flex flex-row" style={{ height: "80%" }}>
        <div className="col-6 p-5">
          <img
            src={homeImg}
            alt="home page logo"
            className="col-10 offset-sm-1"
          />
        </div>
        <div className="right-half col-6"></div>
      </div>
      <div style={{ height: "5%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
