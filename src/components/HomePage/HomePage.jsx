import React from "react";
import Footer from "../../UI/Footer/Footer";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

const HomePage = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="d-flex flex-row" style={{ height: "95%" }}>
        <LeftContainer />
        <RightContainer />
      </div>
      <div style={{ height: "5%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
