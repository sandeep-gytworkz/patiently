import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiFolderZipFill } from "react-icons/ri";
import "./UploadFile.css";

const UploadedFile = ({ file, index, onDelete }) => {
  return (
    <div className="col-sm-4 col-12 mb-2 px-2">
      <div className="d-flex flex-row align-items-center  file-container  justify-content-between px-1">
        <RiFolderZipFill style={{ color: "#00cfe5" }} />
        <div className="d-flex flex-column justify-content-center py-1">
          <p className="fs-14 fw-m mb-0">{file.name}</p>
          <p className="fs-12 fw-r mb-0">
            {(file.size / 1024 / 1024).toFixed(2)}mb
          </p>
        </div>
        <AiFillCloseCircle
          onClick={() => {
            onDelete(index);
          }}
          style={{ color: "#6c6c6c" }}
        />
      </div>
    </div>
  );
};

export default UploadedFile;
