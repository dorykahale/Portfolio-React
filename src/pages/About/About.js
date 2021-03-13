import React from "react";
import AboutHeader from "../../components/About/AboutHeader";
import AboutInfo from "../../components/About/AboutInfo";
import AboutLinks from "../../components/About/AboutLinks";

import "./style.css";

const AboutPage = (props) => (
  <>
    <div className="container AboutContainer">
      <AboutHeader />
      <hr />
      <AboutInfo />
      <hr />
      {/* <AboutLinks /> */}
    </div>
    <br /> <br /> <br />
  </>
);

export default AboutPage;