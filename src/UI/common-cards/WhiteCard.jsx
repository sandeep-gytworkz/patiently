import React from "react";
import homeImg from "../../assets/images/homeImg.png";
import "./whiteCard.css";
const WhiteCard = (props) => {
  return (
    <div className=" d-flex flex-row col-8 white-card">
      <div className="col-6">
        <img src={homeImg} alt="home-image-logo" style={{ width: "100%" }} />
      </div>
      <div className="col-6 d-flex flex-column justify-content-center">
        {props.children}
      </div>
    </div>
  );
};

export default WhiteCard;
