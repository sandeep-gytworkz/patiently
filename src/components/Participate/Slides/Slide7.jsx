import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

const Slide7 = ({ changeSlide }) => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div style={{ margin: "2%", width: "98%" }}>
      <h2>UPLOAD RECORD</h2>
      <div>
        <label id="title">Enter Title</label>
        <input type="text" placeholder="Enter title of the record" id="title" />
      </div>
      <div>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
      </div>
      <p style={{ fontSize: "14px" }}>
        The right of access plays a central role in the General Data Protection
        Regulation (GDPR). On the one hand, because only the right of access
        allows the data subject to exercise further rights (such as
        rectification and erasure). On the other hand, because an omitted or
        incomplete disclosure is subject to fines.
      </p>
      <div
        className="d-flex flex-row"
        style={{ width: "50%", justifyContent: "space-between" }}
      >
        <a href="#">Cancel</a>
        <a href="#">Back</a>
        <button
          className="btn btn-primary"
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
