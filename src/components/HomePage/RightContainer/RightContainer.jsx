import React from "react";
import NavBar from "./NavBar";
import "./RightContainer.css";
const RightContainer = () => {
  return (
    <div className="col-lg-6 col-md-6  right-container">
      <div style={{ backgroundColor: "pink", height: "20%" }}>
        <NavBar />
      </div>
      <div style={{ backgroundColor: "red", height: "60%" }}></div>
    </div>
  );
};

export default RightContainer;
