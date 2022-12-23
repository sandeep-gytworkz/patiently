import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./UploadRecords.css";
import "../../../styles/common/global.css";
import { Link } from "react-router-dom";
import WhiteCard from "../../../UI/common-cards/WhiteCard";
import UploadedFile from "./UploadedFile";
const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

const UploadRecords = ({ changeSlide }) => {
  const [files, setFiles] = useState([]);

  const handleChange = (file) => {
    const currFiles = [...files, file];
    setFiles(currFiles);

    // console.log(file);
  };

  const deleteFile = (index) => {
    const currFiles = files.filter((item, i) => i !== index);
    setFiles(currFiles);
  };

  return (
    <WhiteCard>
      <div className="col-10 ">
        <div className="d-flex flex-column mb-3 col-sm-4 col-12 mt-sm-0 mt-3">
          <label htmlFor="title" className="fs-12 color-primary fw-m">
            Enter Title
          </label>
          <input
            type="text"
            placeholder="Enter title of the record"
            id="title"
            className="title-input"
          />
        </div>
        <div className="col-12">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            classes="col-12"
            maxSize="10"
            onSizeError={(file) => {
              alert("File size should be less than 10mb");
            }}
            multiple={true}
          >
            <div className="c-12 file-upload-label d-flex justify-content-center  ">
              <div className="file-upload-label-main">
                <p className="color-primary fs-16 fw-m my-0">
                  Drag here to upload
                </p>
                <p className="color-primary fs-16 fw-m mt-0  ">or</p>
                <button className="button-browse px-5 py-2 ">Browse</button>
                <p className="fs-12 mt-3 mb-0 fw-m text-center">
                  Supported formats are PDF, JPG, Word Document , Maximum file
                  size 10 MB
                </p>
              </div>
            </div>
          </FileUploader>
        </div>
        <p className="fs-12 data-protection-para mt-2 mb-2 fw-m col-12">
          The right of access plays a central role in the General Data
          Protection Regulation (GDPR). On the one hand, because only the right
          of access allows the data subject to exercise further rights (such as
          rectification and erasure). On the other hand, because an omitted or
          incomplete disclosure is subject to fines.
        </p>
        {files.length > 0 && (
          <div className="col-12 d-flex flex-column mb-2">
            <p className="mb-1 fs-16 fw-m">Uploaded Files</p>
            <div className="col-12 d-flex flex-row overflow-auto flex-wrap flex-sm-nowrap">
              {files.map((item, index) => (
                <UploadedFile file={item} onDelete={deleteFile} index={index} />
              ))}
            </div>
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center col-12  flex-wrap">
          <Link
            className="button-layout button-outlined mx-2 a-tag-btn col-sm-3 col-12 order-3 mb-3 order-sm-1"
            href="/"
          >
            Cancel
          </Link>
          <button
            className="button-layout button-outlined mx-2 col-sm-3 col-12 order-2 mb-3 order-sm-2"
            onClick={() => {
              changeSlide(7);
            }}
          >
            Back to Questions
          </button>
          <button
            className="button-green button-layout mx-2 col-sm-3 col-12 order-1 mb-3 order-sm-3"
            onClick={() => {
              changeSlide(9);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </WhiteCard>
  );
};

export default UploadRecords;
