import React from "react";

const selectField = props => {
  return ( 
   
   <div className="column__sub_div" id={props.selectID}>
        <label for="careWho" className={props.selectID}>
          Who are you looking for?
        </label>
        <br />
        <select>
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

export default selectField;