import React, { Component } from "react";
import "./css/Column.css";
import "./css/normalize.css";
import "./css/section.css";
const column = props => {
  return (
    <div className="column">
      <div className="maps column__sub">
        <img src="https://www.caringforaparent.com/assets/sem_pages/costs/may2013_tea-99f122ce0400d5eed91eb2db0b86c710.png" />
      </div>
      <div className="forms column__sub">
        <div class="column__sub_div">
          <label for="careWho" className="sub_div_label">
            Who are you looking for?
          </label>
          <br />
          <select id="careWho">
            <option value="Parent">Parent(s)</option>
            <option value="Relative">Relative(s)</option>
            <option value="Friend">Friend(s)</option>
            <option value="Myself">Myself</option>
            <option value="Spouse">Spouse</option>
            <option value="Patient">Patient/Client</option>
            <option value="Job">Job</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="column__sub_div">
          <label for="lookingFor" className="sub_div_label">
            Where are you looking for care?
          </label>
          <br />
          <input type="text" id="careWhere" />
        </div>
        <div class="column__sub_div">
          <label for="lookingFor" className="sub_div_label">
            Your e-mail address
          </label>
          <br />
          <input type="email" id="lookingFor" />
        </div>
        <button value="Get Started" />
      </div>
    </div>
  );
};

export default column;
