import React from "react";
import djpic from "../../../assets/images/DirtyMcKenzie.jpg";
import "./style.css";

const AboutInfo = (props) => (
  <div className="row About">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <img
        src={djpic}
        className="dorypic"
        alt="Dory"
      />
        <p>A paid DJ since 1988,
        I have performed thousands of gigs and mastered every DJ format available to date since the mid 1980’s. Having started out as a humble mobile/wedding DJ in my teens and being infatuated with electronic music, I ended up growing alongside DJ culture as one of Minneapolis’ first Warehouse/Rave DJs and Techno producers. Early in my carreer, after releasing about a dozen Techno and Acid House releases on various International record labels, I found myself embedded in the 90s electronic dance music movement and I began sharing stages with some of (now) Dance Music history’s biggest icons like Daft Punk, Aphex Twin, Josh Wink, Green Velvet, Ritchie Hawtin, Giorgio Moroder, Frankie Bones, Tommie Sunshine, Jeff Mills, Frankie Knuckles, Keoki, DJ Sneak, Woody McBride, Derrick Carter, Mark Farina, Gene Farris, Paul Johnson, DVS1, and many others. 
        </p>

        <p>Some accolades include City Pages “Best Club DJ”, dozens of     staff/editor “best of” chartings on Beatport, Traxsource & Juno, and my own star on the wall of the historic First Avenue Night Club in Minneapolis, Minnesota.
        </p>
    </div>
  </div>
);

export default AboutInfo;