import React from "react";

import "./whiteCard.css";
const WhiteCard = (props) => {
  return (
    <div className=" d-flex flex-column col-8 white-card align-items-center justify-content-center">
      {props.children}
    </div>
  );
};

export default WhiteCard;
