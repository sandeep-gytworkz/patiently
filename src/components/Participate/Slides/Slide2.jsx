import React, { useState } from "react";
import OtpInput from "react-otp-input";
import homeImg from "../../../assets/images/homeImg.png";
const Slide2 = ({ changeSlide }) => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (number) => {
    setOtp(number);
  };
  return (
    <>
      <div style={{ width: "50%" }}>
        <img
          src={homeImg}
          alt="home image"
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </div>
      <div style={{ width: "50%" }}>
        <h4>Two Factor Authentication</h4>
        <p>
          Hi John, You have received 6 digit code in your provided email/contact
          number.
        </p>
        <div>
          <OtpInput
            value={otp}
            onChange={handleOtpChange}
            numInputs={6}
            containerStyle={{ padding: "10px 0" }}
            inputStyle={{
              width: "50px",
              height: "60px",
              marginRight: "10px",
              fontSize: "2rem",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.3)",
            }}
          />
        </div>
        <div className="d-flex flex-row mt-5 ">
          <a href="#" className="me-5">
            Cancel
          </a>
          <button
            onClick={() => {
              changeSlide(2);
            }}
          >
            Continue to Questions
          </button>
        </div>
      </div>
    </>
  );
};

export default Slide2;
