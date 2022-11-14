import React from "react";

import homeImg from "../../../assets/images/homeImg.png";
const Slide2 = () => {
  return (
    <>
      <div style={{ width: "50%" }}>
        <img
          src={homeImg}
          alt="home image"
          style={{ width: "75%", height: "100%" }}
        />
      </div>
      <div style={{ width: "50%" }}>
        <h4>Two Factor Authentication</h4>
        <p>
          Hi John, You have received 6 digit code in your provided email/contact
          number.
        </p>
        <div>authentication</div>
        <div className="d-flex flex-row">
          <a href="#">Cancel</a>
          <button>Continue to Questions</button>
        </div>
      </div>
    </>
  );
};

export default Slide2;
