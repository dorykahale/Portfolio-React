import React from "react";
import Projects from "../Projects";
import PortfolioHeader from "../PortfolioHeader";
import projectsArr from "../../../assets/Projects/Projects.js";
import "./style.css";

const PortfolioContainer = (props) => {
  return (
    <div className="container PortfolioContainer">
      <div className="row">
        <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12">
          <PortfolioHeader />
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 Portfolio">
          {projectsArr.map((proj) => {
            return (
              <Projects
                key={proj.id}
                name={proj.name}
                description={proj.description}
                image={proj.image}
                deployed={proj.deployed}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioContainer;