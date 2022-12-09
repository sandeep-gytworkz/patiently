import React from "react";
import Footer from "../Footer/Footer";
import Logo from "../../assets/images/logo.png";
import Card from "./Card";

const BackgroundCard = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        className="container-fluid"
        style={{ backgroundColor: "pink", height: "20%" }}
      >
        <img src={Logo} alt="logo" />
      </div>
      <div style={{ backgroundColor: "green", height: "75%" }}>
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default BackgroundCard;
