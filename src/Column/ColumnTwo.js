import React from "react";
import CSSTransitionGroup from "react-transition-group";

const columnTwo = props => {
  return (
    <div className="form__fields form__sub--2">
      <div class="column__sub_div">
        <label htmlFor="clientName" className="sub_div_label">
          Your first and last name
        </label>
        <br />
        <input type="text" id="clientName" value={props.where} />
      </div>
      <div class="column__sub_div">
        <label htmlFor="phone" className="sub_div_label">
          Your phone number
        </label>
        <br />
        <input type="email" id="phone" value={props.email} />
      </div>
    </div>
  );
};

export default columnTwo;
