import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiFolderZipFill } from "react-icons/ri";
import "./UploadFile.css";

const UploadedFile = ({ file, index, onDelete }) => {
  return (
    <div className="col-4 mb-2 px-2">
      <div className="d-flex flex-row align-items-center  file-container  justify-content-between px-1">
        <RiFolderZipFill />
        <div className="d-flex flex-column justify-content-center">
          <p className="fs-14 mb-0">{file.name}</p>
          <p className="fs-12">{(file.size / 1024 / 1024).toFixed(2)}mb</p>
        </div>
        <AiFillCloseCircle
          onClick={() => {
            onDelete(index);
          }}
        />
      </div>
    </div>
  );
};

export default UploadedFile;