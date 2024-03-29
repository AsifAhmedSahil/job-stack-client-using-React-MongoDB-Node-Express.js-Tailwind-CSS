import React from 'react'
import InputField from '../assets/Components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
    <h3 className="font-serif text-lg mb-3">Work Experience</h3>

    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span> Any experience
      </label>

      
      <InputField
        handleChange={handleChange}
        name="test"
        value="internship"
        title="Internship"
      />
      <InputField
        handleChange={handleChange}
        name="test"
        value="work remotely"
        title="Work remotely"
      />
      
    </div>
  </div>
  )
}

export default WorkExperience
