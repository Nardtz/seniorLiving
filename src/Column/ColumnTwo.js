import React, { Component } from "react";
import "./css/Column.css";
import "./css/section.css";
const columnTwo = props => {
  return (
    <div className="form__sub--2">
      <div class="column__sub_div">
        <label for="clientName" className="sub_div_label">
          Your first and last name
        </label>
        <br />
        <input type="text" id="clientName" value={props.where} />
      </div>
      <div class="column__sub_div">
        <label for="phone" className="sub_div_label">
          Your phone number
        </label>
        <br />
        <input type="email" id="phone" value={props.email} />
      </div>
    </div>
  );
};

export default columnTwo;
