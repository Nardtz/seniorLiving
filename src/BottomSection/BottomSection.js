import React from "react";
import Seal from "../truste-seal.jpg";

const bottomSection = props => {
  return (
    <div className="Column">
      <div class="column__sub">
        <ul className="List">
          <li>Find Cost Information</li>
          <li>See Pictures of Communities</li>
          <li>Compare Options and Amenities</li>
          <li>Get Ratings and Read Reviews</li>
        </ul>
      </div>
      <div class="column__sub">
        <img src={Seal} alt="seal" className="Seal" />
      </div>
    </div>
  );
};

export default bottomSection;
