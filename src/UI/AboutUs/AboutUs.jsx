import React from "react";
import Header from "../Header/Header";
import aboutUsImg from "../../assets/images/aboutUsImg.png";
import "../../styles/common/global.css";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="col-12 bg-blue px-5 py-4 mb-2 ">
        <h1 className="p-l-3 fw-sb">About</h1>
      </div>
      <div className="d-flex flex-column px-5 ">
        <div className="p-l-3 p-r-2 ">
          <p className="fs-18 fw-m">
            Patiently Health Data is a patient-driven, real-world data
            aggregator. We partner directly with patients to gather the critical
            health data researchers need to better understand under-researched
            diseases and, ultimately advance care for patients.​
          </p>
        </div>
        <div className="d-flex flex-row p-l-3 p-r-2  ">
          <div className="col-3">
            <img src={aboutUsImg} alt="about-us-image" className="w-100" />
          </div>
          <div className="col-9 ps-5">
            <p className="fs-22 fw-sb mb-1">Patient-centricity</p>
            <p className="fs-18 fw-r">
              patients know their healthcare journey better than anyone. We
              partner directly with patients who choose to share their
              healthcare data, not healthcare providers or third-party data
              brokers.
            </p>
            <p className="fs-22 fw-sb mb-1">Transparency</p>
            <p className="fs-18 fw-r">
              patients should know exactly who is accessing their healthcare
              data and how it is being used. As members of the Patiently HD
              community, our patient partners will be informed every time their
              data is accessed and when possible, by whom and for what purpose.​
            </p>
            <p className="fs-22 fw-sb mb-1">Privacy</p>
            <p className="fs-18 fw-r">
              we know that health data is highly sensitive therefore we have a
              robust framework of security measures and confidentiality
              practices in place to ensure our patient partners’ data is secure,
              de-identified, and only shared in ways that they have agreed to.​
            </p>
          </div>
        </div>
        <div className="p-l-3 p-r-2">
          <Footer alignment="justify-content-start" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
