import React from "react";
import Footer from "../Footer/Footer";
import Logo from "../../assets/images/logo.png";

const BackgroundCard = (props) => {
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
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default BackgroundCard;
