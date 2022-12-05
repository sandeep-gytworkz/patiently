import React from "react";
import Header from "../../UI/Header/Header";
import "../../styles/common/global.css";
import howItWorks from "../../assets/images/howItWorks.png";

const HowItWorks = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="col-12 bg-blue px-5 py-4 mb-2 ">
        <h1>How it Works</h1>
      </div>
      <div className="d-flex flex-column px-5 ">
        <div>
          <p className="fs-16 fw-b">Getting involved is simple</p>
          <p className="fs-18">
            Patients with celiac disease know better than anyone that it is a
            complex condition with no treatment options. Patiently HD wants to
            change that. By connecting patient health data and experiences with
            researchers in the field, we can advance healthcare together. ​
          </p>
          <p className="fs-18">
            The Patiently HD team will review your information and let you know
            if you qualify. Your data is always secure, confidential and
            deidentified. The Patient HD will check in with you periodically to
            see what’s going on with your health and to update you on how the
            dataset is being used to advance research.
          </p>
        </div>
        <div>
          <img src={howItWorks} alt="howItWorks-image" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
