import React from "react";
import "./style.css";

const AboutLinks = (props) => (
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3 id="h3">
        <strong>You talkin' to me?</strong>
      </h3>
      <ul className="dontcontact">
        <li>
          <strong>Email: </strong>{" "}
          <a href="mailto:dorykahale@gmail.com">dorykahale@gmail.com</a>
        </li>
        <li>
          <strong>GitHub: </strong>{" "}
          <a href="https://github.com/dorykahale">
            dorykahale
          </a>
        </li>
        <li>
          <strong>LinkedIn: </strong>{" "}
          <a
            href="www.linkedin.com/in/dorykahale">
            Dory Kahalé
          </a>
        </li>
        <li>
          <strong>Resume: </strong>{" "}
          <a
            href="https://drive.google.com/file/d/1mu9CcfWJqB4EdsLpDmijaQyec1F7xNXl/view?usp=sharing">
            Google Drive
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default AboutLinks;