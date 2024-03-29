import React from 'react'
import InputField from '../assets/Components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h3 className="font-serif text-lg mb-3">Types Of Employment</h3>

    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span> Any Types
      </label>

      
      <InputField
        handleChange={handleChange}
        name="test"
        value="full-time"
        title="Full-time"
      />
      <InputField
        handleChange={handleChange}
        name="test"
        value="temporary"
        title="Temporary"
      />
      <InputField
        handleChange={handleChange}
        name="test"
        value="part-time"
        title="Part-time"
      />
      
    </div>
  </div>
  )
}

export default EmploymentType
