import React, { useState } from "react";
import OtpInput from "react-otp-input";
import homeImg from "../../../assets/images/homeImg.png";
import { Link } from "react-router-dom";

const Slide2 = ({ changeSlide }) => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (number) => {
    setOtp(number);
  };
  return (
    <>
      <div className="col-6">
        <img src={homeImg} alt="home image" className="h-100" />
      </div>
      <div className="col-6">
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
        <div className="d-flex flex-row mt-5 align-items-center">
          <Link to="/" className="me-5 a-tag">
            Cancel
          </Link>
          <button
            onClick={() => {
              changeSlide(3);
            }}
            className="button-layout button-magic-mint"
          >
            Continue to Questions
          </button>
        </div>
      </div>
    </>
  );
};

export default Slide2;
