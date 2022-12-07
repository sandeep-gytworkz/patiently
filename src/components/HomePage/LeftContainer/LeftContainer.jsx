import React from "react";
import Logo from "../../../../src/assets/images/logo.png";
import homeImg from "../../../assets/images/homeImg.png";
import "./LeftContainer.css";
const LeftContainer = () => {
  return (
    <div className="col-lg-6 col-md-6  d-flex flex-column left-container">
      <div style={{ height: "10%" }} className="my-2 ">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "85%", marginLeft: "2%" }}
        />
      </div>
      <div className="my-2 mx-2" style={{ height: "60%" }}>
        <img
          src={homeImg}
          alt="home page logo"
          style={{ height: "100%", marginLeft: "15%", marginRight: "6%" }}
        />
      </div>
    </div>
  );
};

export default LeftContainer;
