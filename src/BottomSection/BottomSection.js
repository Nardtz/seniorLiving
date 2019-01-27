import React from "react";
import Seal from "../truste-seal.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const bottomSection = props => {
  return (
    <div className="Bottom">
      <div className="oneFourth">
        <div className="dollar">
          <div class="iconHolder">
            <FontAwesomeIcon icon="dollar-sign" />
          </div>
          <div class="titleHolder">Find Cost Information</div>
        </div>
      </div>
      <div class="oneFourth">
        <div class="images">
          <div class="iconHolder">
            <FontAwesomeIcon icon="images" />
          </div>
          <div class="titleHolder">See Pictures of Communities</div>
        </div>
      </div>
      <div class="oneFourth">
        <div class="clipboard">
          <div class="iconHolder">
            <FontAwesomeIcon icon="clipboard-check" />
          </div>
          <div class="titleHolder">Compare Options and Amenities</div>
        </div>
      </div>
      <div class="oneFourth">
        <div class="star">
          <div class="iconHolder">
            <FontAwesomeIcon icon="star-half-alt" />
          </div>
          <div class="titleHolder">Get Ratings and Read Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default bottomSection;
