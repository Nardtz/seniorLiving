import React from "react";

const columnOne = props => {
  return (
    <div className="form__fields form--sub1">
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
        <input type="text" id="lookingFor" value={props.where} />
      </div>
      <div class="column__sub_div">
        <label for="email" className="sub_div_label">
          Your e-mail address
        </label>
        <br />
        <input
          type="email"
          id="email"
          value={props.email}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default columnOne;
