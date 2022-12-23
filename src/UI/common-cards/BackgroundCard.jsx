import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const BackgroundCard = (props) => {
  return (
    <div
      className="d-flex flex-column "
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* <Header hideRight={true} /> */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80%", backgroundColor: "#F8FEFB" }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default BackgroundCard;
