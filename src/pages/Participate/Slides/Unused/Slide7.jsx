import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./Slide7.css";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";
const fileTypes = ["JPG", "PNG", "GIF"];

const Slide7 = ({ changeSlide }) => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="mx-5 my-2">
      <h2 className="color-primary fs-24 fw-bold">UPLOAD RECORD</h2>
      <div className="d-flex flex-column mb-2">
        <label htmlFor="title" className="fs-12 color-primary fw-bold">
          Enter Title
        </label>
        <input
          type="text"
          placeholder="Enter title of the record"
          id="title"
          className="title-input"
        />
      </div>
      <div>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          classes="col-12"
        >
          <div className="c-12 file-upload-label d-flex justify-content-center  ">
            <div className="file-upload-label-main">
              <p className="color-primary fs-16 fw-bold my-0">
                Drag here to upload
              </p>
              <p className="color-primary fs-16 fw-bold mt-0">or</p>
              <button className="button-contained button-layout px-5">
                Browse
              </button>
            </div>
          </div>
        </FileUploader>
      </div>
      <p className="fs-12 data-protection-para mt-3">
        The right of access plays a central role in the General Data Protection
        Regulation (GDPR). On the one hand, because only the right of access
        allows the data subject to exercise further rights (such as
        rectification and erasure). On the other hand, because an omitted or
        incomplete disclosure is subject to fines.
      </p>
      <div className="d-flex flex-row col-6 justify-content-between align-items-center">
        <Link className="color-primary fs-18 a-tag" href="/">
          Cancel
        </Link>
        <button
          className="a-tag button-virtual"
          onClick={() => {
            changeSlide(6);
          }}
        >
          Back
        </button>
        <button
          className="button-magic-mint button-layout px-5"
          onClick={() => {
            changeSlide(8);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slide7;
