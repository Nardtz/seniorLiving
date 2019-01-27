import React from "react";

const inputField = props => {
  return ( 
   
   <div className="column__sub_div" id={props.inputID}>
        <label for="careWho" className={props.inputID}>
          Who are you looking for?
        </label>
        <br />
        <br />
        <input
          type="text"
          id="lookingFor"
          value={props.where}
          placeholder="Zip Code or City, State"
          onChange={props.changed}
        />
      </div>

export default inputField;