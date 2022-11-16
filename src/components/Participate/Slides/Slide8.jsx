import React from "react";

import checkListImg from "../../../assets/images/checkListImg.png";
const Slide8 = () => {
  return (
    <div className="d-flex flex-row ">
      <div className="col-6">
        <img
          src={checkListImg}
          alt="check list image"
          style={{ width: "70%", height: "90%", margin: "5%" }}
        />
      </div>
      <div className="col-6">
        <div style={{ paddingBottom: "10rem" }}>
          <h2>Thanks John</h2>
          <p>
            See a summary of the information you share and the data saved in
            your patient.ly profile.
          </p>
        </div>
        <button className="btn btn-primary">Go to your profile</button>
      </div>
    </div>
  );
};

export default Slide8;
