import React from "react";
import dataPrivacy1 from "../../assets/images/dataPrivacy1.png";
import dataPrivacy2 from "../../assets/images/dataPrivacy2.png";
import dataPrivacy3 from "../../assets/images/dataPrivacy3.png";
import "./DataPrivacy.css";
import "../../styles/common/global.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";

const DataPrivacy = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="col-12 bg-pink px-5 py-4 mb-2 ">
        <h1 className="p-l-3 fw-sb">Data Privacy</h1>
      </div>
      <div className="data-privacy-main">
        <div className="data-container">
              <img src={dataPrivacy1} alt="data-privacy-image" className="data-privacy-image" />
              <div className="px-4 data-privacy-text-container">
                <p className="data-privacy-text-header fs-20 fw-sb mb-1 pt-2">De-identification</p>
                <p className="data-privacy-text-para fs-18 fw-r">
                  All data shared with researchers is de-identified (no names,
                  addresses, phone numbers, etc.) so that the data cannot be
                  connected back to an individual.​
                </p>
              </div>
        </div>
        <div className="data-container">
              <img src={dataPrivacy2} alt="data-privacy-image" className="data-privacy-image" />
              <div className="px-4 data-privacy-text-container">
                <p className="data-privacy-text-header fs-20 fw-sb mb-1 pt-2">Encryption</p>
                <p className="data-privacy-text-para fs-18 fw-r">
                  All data shared with researchers is de-identified (no names,
                  addresses, phone numbers, etc.) so that the data cannot be
                  connected back to an individual.​
                </p>
              </div>
        </div>
        <div className="data-container">
              <img src={dataPrivacy3} alt="data-privacy-image" className="data-privacy-image" />
              <div className="px-4 data-privacy-text-container">
                <p className="data-privacy-text-header fs-20 fw-sb mb-1 pt-2">Confidentiality​</p>
                <p className="data-privacy-text-para fs-18 fw-r">
                  All data shared with researchers is de-identified (no names,
                  addresses, phone numbers, etc.) so that the data cannot be
                  connected back to an individual.​
                </p>
              </div>
        </div>
        <div className="footer-container">
          <Footer alignment="justify-content-start" />
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;
