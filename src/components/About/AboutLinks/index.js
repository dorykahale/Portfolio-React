import React from "react";
import "./style.css";

const AboutLinks = (props) => (
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3 id="allText">
        <a id="allText"></a>
      </h3>
      <ul className="dontcontact">
        <li>
          <strong id="allText">Email: </strong>{" "}
          <a href="mailto:dorykahale@gmail.com" id="allText">dorykahale@gmail.com</a>
        </li>
        <li>
          <strong id="allText">GitHub: </strong>{" "}
          <a href="https://github.com/dorykahale" id="allText">
            dorykahale
          </a>
        </li>
        <li>
          <strong id="allText">LinkedIn: </strong>{" "}
          <a
            href="www.linkedin.com/in/dorykahale" id="allText"> 
            Dory Kahalé
          </a>
        </li>
        <li>
          <strong id="allText">Resume: </strong>{" "}
          <a
            href="https://drive.google.com/file/d/1mu9CcfWJqB4EdsLpDmijaQyec1F7xNXl/view?usp=sharing" id="allText">
            Google Drive
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default AboutLinks;