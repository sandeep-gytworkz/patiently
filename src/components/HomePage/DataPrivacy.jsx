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
      <div className="d-flex flex-column px-5 ">
        <div className="d-flex flex-row my-2 p-l-6 p-r-2">
          <div className="data-container d-flex flex-row align-items-center  ">
            <div className="  d-flex flex-row data-privacy-item align-items-center">
              <img src={dataPrivacy1} alt="data-privacy-image" />

              <div className="py-1 px-4">
                <p className="fs-20 fw-sb mb-1 pt-2">De-identification</p>
                <p className="fs-18 fw-r">
                  All data shared with researchers is de-identified (no names,
                  addresses, phone numbers, etc.) so that the data cannot be
                  connected back to an individual.​
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row my-2 p-l-6 p-r-2">
          <div className="data-container d-flex flex-row align-items-center  ">
            <div className="  d-flex flex-row data-privacy-item align-items-center">
              <img src={dataPrivacy2} alt="data-privacy-image" />

              <div className="py-1 px-4">
                <p className="fs-20 fw-sb mb-1 pt-2">Encryption</p>
                <p className="fs-18 fw-r">
                  All data shared with researchers is de-identified (no names,
                  addresses, phone numbers, etc.) so that the data cannot be
                  connected back to an individual.​
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row my-2 p-l-6 p-r-2">
          <div className="data-container d-flex flex-row align-items-center  ">
            <div className="  d-flex flex-row data-privacy-item align-items-center">
              <img src={dataPrivacy3} alt="data-privacy-image" />

              <div className="py-1 px-4">
                <p className="fs-20 fw-sb mb-1 pt-2">Confidentiality​</p>
                <p className="fs-18 fw-r">
                  All data shared with researchers is de-identified (no names,
                  addresses, phone numbers, etc.) so that the data cannot be
                  connected back to an individual.​
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-l-3 p-r-2 ">
          <Footer alignment="justify-content-start" />
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;
