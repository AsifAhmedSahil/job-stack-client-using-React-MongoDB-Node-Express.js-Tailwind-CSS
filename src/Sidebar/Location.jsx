import React from "react";
import InputField from "../assets/Components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h3 className="font-serif text-lg mb-3">Location</h3>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>

        <InputField
          handleChange={handleChange}
          name="test"
          value="Dhaka"
          title="Dhaka"
        />
        <InputField
          handleChange={handleChange}
          name="test"
          value="seattle"
          title="Seattle"
        />
        <InputField
          handleChange={handleChange}
          name="test"
          value="madrid"
          title="Madrid"
        />
        <InputField
          handleChange={handleChange}
          name="test"
          value="boston"
          title="Boston"
        />
      </div>
    </div>
  );
};

export default Location;
