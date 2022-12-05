import React, { useState, useEffect } from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import homePageCircle from "../../assets/images/homePageCircle.svg";

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
      <div className="bg-green d-flex flex-row">
        <div className="col-8 ps-5 d-flex flex-column">
          <div>
            <p className="fs-64"> Bringing the Patient Journey to Life</p>
            <p className="fs-32">
              Your celiac health journey is unique, but you are not alone. Join
              a community of fellow celiac patients, share your experience, be
              part of the solution.
            </p>
            <Link
              to="/participate-now "
              className="button-layout a-tag-white-btn"
            >
              Participate Now
            </Link>
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <div className="col-4">
          <img
            src={homePageCircle}
            alt="home page circles image"
            className="h-100"
          />
        </div>
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
      {/* <PrivacyPolicy showPrivacyPolicy={showPrivacyPolicy} togglePrivacyPolicy={togglePrivacyPolicy} /> */}
    </div>
  );
};

export default Homepage;
