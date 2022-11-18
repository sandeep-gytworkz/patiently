import React, { useState, useEffect } from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import "./HomePage.css";
import homeImg from "../../assets/images/homeImg.png";
import "../../styles/common/global.css";
import arrow from "../../assets/images/arrow.svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [cookieState, setCookieState] = useState(false);

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
      <Header />
      <div className="d-flex flex-row" style={{ height: "78%" }}>
        <div className="col-6 p-5">
          <img
            src={homeImg}
            alt="home page logo"
            className="col-10 offset-sm-1"
          />
        </div>
        <div className="right-half col-6 pt-5 ps-5">
          <h1 className="color-primary">
            Desire to improve
            <br />
            <span className="heading-highlight ">medical care</span> for future
            <br /> generations
          </h1>
          <h3 className="sub-heading">
            Clinical trials offer hope for many people and an opportunity to
            help researchers find better treatments for others in the future.
          </h3>
          <Link
            className="btn btn-info learn-more-button"
            to="/participate-now"
          >
            Learn More <img src={arrow} alt="arrow" width={18} height={21} />
          </Link>
        </div>
      </div>
      <div style={{ height: "5%" }}>
        <Footer />
      </div>
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
    </div>
  );
};

export default Homepage;
