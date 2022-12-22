import React from "react";
import Header from "../../UI/Header/Header";
import "../../styles/common/global.css";
import howItWorks from "../../assets/images/howItWorks.png";
import howItWorksMob from "../../assets/images/howItWorksMob.png";
import Footer from "../../UI/Footer/Footer";

const HowItWorks = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="col-12 bg-blue px-sm-5 px-0  py-4  mb-2 d-flex flex-row justify-content-center ">
        <h1 className="p-l-3 fw-sb col-sm-12 col-10">How it Works</h1>
      </div>
      <div className="d-flex flex-column px-sm-5 ">
        <div className="p-l-3 p-r-2 col-12 d-flex flex-column align-items-center">
          <p className="fs-16 fw-sb very-dark-gray col-sm-12 col-10">
            Getting involved is simple
          </p>
          <p className="fs-18 fw-r col-sm-12 col-10">
            Patients with celiac disease know better than anyone that it is a
            complex condition with no treatment options. Patiently HD wants to
            change that. By connecting patient health data and experiences with
            researchers in the field, we can advance healthcare together. ​
          </p>
          <p className="fs-18 fw-r col-sm-12 col-10">
            The Patiently HD team will review your information and let you know
            if you qualify. Your data is always secure, confidential and
            deidentified. The Patient HD will check in with you periodically to
            see what’s going on with your health and to update you on how the
            dataset is being used to advance research.
          </p>
        </div>
        <div className="p-l-3 p-r-2 col-12 d-flex flex-row justify-content-center">
          <img
            src={howItWorks}
            alt="patiently -logo "
            className={"img-responsive d-none d-sm-block mb-3"}
          />
          <img
            src={howItWorksMob}
            alt="patiently -logo "
            className={"img-responsive d-block d-sm-none col-sm-12 col-10 mb-5"}
          />
        </div>
        <div className="p-l-3 p-r-2">
          <Footer alignment="justify-content-start" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
