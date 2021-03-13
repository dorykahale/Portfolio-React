import React from "react";


import "./style.css";

const Projects = (props) => {
  return (
    <>
      <h3>
        <u id="allText">{props.name}</u>
      </h3>
      <p id="allText">{props.description}</p>
      <img
        src={props.image}
        className="PortfolioPics"
        alt={`${props.name} Demo`}
      />
      <br />
      <p>
        <strong id="allText">Deployed/Repository:</strong> <a href={props.deployed}>{props.deployed}</a>
      </p>
      <br />
      <hr/>
    </>
  );
};

export default Projects;