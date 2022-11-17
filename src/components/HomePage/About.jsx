import React from "react";
import BackgroundCard from "../../UI/common-cards/BackgroundCard";
import WhiteCard from "../../UI/common-cards/WhiteCard";
import "../../styles/common/global.css";

const About = () => {
  return (
    <BackgroundCard>
      <WhiteCard>
        <div className="col-8 ">
          <p className="color-primary fs-24">This is about us !</p>
        </div>
      </WhiteCard>
    </BackgroundCard>
  );
};

export default About;
