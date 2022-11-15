import React from "react";

const Slide4 = ({ changeSlide }) => {
  return (
    <div style={{ margin: "2%", width: "98%" }}>
      <h2>UPLOAD RECORD</h2>
      <div>
        <label id="title">Enter Title</label>
        <input type="text" placeholder="Enter title of the record" id="title" />
      </div>
      <div
        className="border-black-300 border-dashed d-flex flex-column"
        style={{
          width: "100%",
          height: "40%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Drag here to upload
        <br />
        or
        <div>
          <button>Browse</button>
        </div>
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
          onClick={() => {
            changeSlide(4);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slide4;
