import React from "react";
import BackgroundCard from "../../UI/common-cards/BackgroundCard";
import WhiteCard from "../../UI/common-cards/WhiteCard";
import "../../styles/common/global.css";

const About = () => {
  return (
    <BackgroundCard>
      <WhiteCard>
        <div className="col-8 ">
          <div className="col-12 pt-5 ps-5">
            <h1 className="color-primary">
              Desire to improve
              <br />
              <span className="heading-highlight ">medical care</span> for future
              <br /> generations
            </h1>
            <h3 className="sub-heading">
              Clinical trials offer hope for many people and an opportunity to
              help researchers find better treatments for others in the future.
            </h3>
          </div>
        </div>
      </WhiteCard>
    </BackgroundCard>
  );
};

export default About;
