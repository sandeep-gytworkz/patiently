import React, { useState, useEffect } from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import ContactUs from "../../UI/ContactUs/ContactUs";
import AboutUs from "../../UI/AboutUs/AboutUs";
import "./HomePage.css";
import homeImg from "../../assets/images/homeImg.png";
import "../../styles/common/global.css";
import arrow from "../../assets/images/arrow.svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [cookieState, setCookieState] = useState(false);
  const [showContactUs, toggleContactUs] = useState(false);
  const [showAboutUs, toggleAboutUs] = useState(false);

  const setCookie = () => {
    setCookieState(true);
    localStorage.setItem("cookieSet", "true");
  };

  useEffect(() => {
    let cookieSet = localStorage.getItem("cookieSet");
    if (cookieSet) {
      setCookieState(true);
    }
  }, []);

  return (
    <div className="d-flex flex-column homePage-container">
      <Header
        toggleAboutUs={() => {
          toggleAboutUs(!showAboutUs);
        }}
      />
      <div className="container-fluid text-left">
        <div className="row content-section">
          <div className="col-sm-12 col-md-6 ps-5 pt-5">
            <h1 className="color-primary px-5 pt-5">
              Desire to improve
              <br />
              <span className="heading-highlight ">medical care</span> for
              future
              <br /> generations
            </h1>
            <h5 className="sub-heading ps-5">
              Clinical trials offer hope for many people and an opportunity to
              help researchers find better treatments for others in the future.
            </h5>
            <Link
              className="btn btn-info learn-more-button mx-5"
              to="/participate-now"
            >
              Learn More{" "}
              <img
                src={arrow}
                alt="arrow"
                width={18}
                height={21}
                className="ms-3"
              />
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 right-half p-5">
            <img src={homeImg} alt="home page logo" className="col-10" />
          </div>
          {showContactUs && (
            <ContactUs
              showContactUs={showContactUs}
              toggleContactUs={() => toggleContactUs(!showContactUs)}
            />
          )}
          {showAboutUs && (
            <AboutUs
              showAboutUs={showAboutUs}
              toggleAboutUs={() => toggleAboutUs(!showAboutUs)}
            />
          )}
        </div>
        {/* <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
          <div className="col-sm-12 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
        </div> */}
      </div>
      <Footer
        toggleContactUs={() => {
          toggleContactUs(!showContactUs);
        }}
      />
      {!cookieState && (
        <div className=" cookies-banner">
          <div className="  cookies-banner-main d-flex  flex-row align-items-center justify-content-between">
            <div>
              <p>We value your privacy</p>
              <p>
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic.
              </p>
              <p>
                By clicking “Accept All”, you consent to our use of cookies.
                Read More
              </p>
            </div>
            <div>
              {/* <button className="button-layout button-outlined fs-16 me-2">
                Manage
              </button> */}
              <button
                className="button-layout button-outlined fs-16 me-2"
                onClick={() => {
                  setCookie(false);
                }}
              >
                Reject All
              </button>
              <button
                className="button-layout button-contained fs-16"
                onClick={() => {
                  setCookie(true);
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <PrivacyPolicy showPrivacyPolicy={showPrivacyPolicy} togglePrivacyPolicy={togglePrivacyPolicy} /> */}
    </div>
  );
};

export default Homepage;
