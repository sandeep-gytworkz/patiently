import React from "react";

import checkListImg from "../../../assets/images/checkListImg.png";
const Slide5 = () => {
  return (
    <div className="d-flex flex-row">
      <div style={{ width: "50%" }}>
        <img
          src={checkListImg}
          alt="check list image"
          style={{ width: "70%", height: "90%", margin: "5%" }}
        />
      </div>
      <div style={{ width: "50%", margin: "5%" }}>
        <h2>Thanks John</h2>
        <p>
          See a summary of the information you share and the data saved in your
          patient.ly profile.
        </p>
        <button>Go to your profile</button>
      </div>
    </div>
  );
};

export default Slide5;
