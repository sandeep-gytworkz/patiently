import React from "react";
import Header from "../../components/Header/Header";
import aboutUsImg from "../../assets/images/aboutUsImg.png";
import "../../styles/common/global.css";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import whiteLeftArrow from "../../assets/images/whiteLeftArrow.svg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="d-flex flex-column">
      <div className="d-none d-sm-block">
        <Header />
      </div>
      <div className="col-12 bg-blue px-sm-5 px-0 py-4 mb-sm-4 mb-3 d-flex flex-row justify-content-center ">
        <h1 className="p-l-3 fw-sb col-sm-12 col-10">
          <span className="d-inline d-sm-none">
            <Link to="/">
              <img src={whiteLeftArrow} alt="back-arrow" className="me-3" />
            </Link>
          </span>
          About
        </h1>
      </div>
      <div className="d-flex flex-column px-sm-5 col-12 ">
        <div
          className=" d-flex flex-row justify-content-center justify-content-sm-start col-12 mb-sm-4 mb-3
        "
        >
          <div className="p-l-3 p-r-2 col-10 col-sm-12 ">
            <p className="fs-18 fw-m text-align-justify">
              Patiently Health Data is a patient-driven, real-world data
              aggregator. We partner directly with patients to gather the
              critical health data researchers need to better understand
              under-researched diseases and, ultimately advance care for
              patients.​
            </p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center justify-content-sm-start col-12">
          <div className="d-flex flex-row p-l-3 p-r-2 col-10 col-sm-12 ">
            <div className="col-sm-3 col-6">
              <img
                src={aboutUsImg}
                alt="about-us-image"
                className="w-100 custom-img-size"
              />
            </div>
            <div className="col-sm-8 col-6 ps-sm-0 ps-1 offset-sm-1">
              <p className="fs-22 fw-sb mb-1">Patient-centricity</p>
              <p className="fs-18 fw-r text-align-justify ">
                patients know their healthcare journey better than anyone. We
                partner directly with patients who choose to share their
                healthcare data, not healthcare providers or third-party data
                brokers.
              </p>
              <p className="fs-22 fw-sb mb-1 custom-content-fit">
                Transparency
              </p>
              <p className="fs-18 fw-r custom-content-fit">
                patients should know exactly who is accessing their healthcare
                data and how it is being used. As members of the Patiently HD
                community, our patient partners will be informed every time
                their data is accessed and when possible, by whom and for what
                purpose.​
              </p>
              <p className="fs-22 fw-sb mb-1 custom-content-fit">Privacy</p>
              <p className="fs-18 fw-r custom-content-fit mb-sm-3 mb-5">
                we know that health data is highly sensitive therefore we have a
                robust framework of security measures and confidentiality
                practices in place to ensure our patient partners’ data is
                secure, de-identified, and only shared in ways that they have
                agreed to.​
              </p>
            </div>
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