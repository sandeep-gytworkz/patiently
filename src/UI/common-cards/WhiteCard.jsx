import React from "react";

import "./whiteCard.css";
const WhiteCard = (props) => {
  return (
    <div className=" d-flex flex-column col-sm-8 col-10 white-card align-items-center justify-content-center">
      {props.children}
    </div>
  );
};

export default WhiteCard;
