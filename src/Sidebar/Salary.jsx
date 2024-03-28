import React from 'react'
import Button from './Button'
import InputField from '../assets/Components/InputField'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
        <h4 className='font-medium text-lg mb-3'>Salary</h4>
      <div className='mb-4'>
      <Button onclickHandler={handleClick} value="" title="Hourly"/>
      <Button onclickHandler={handleClick} value="Monthly" title="Monthly"/>
      <Button onclickHandler={handleClick} value="Yearly" title="Yearly"/>
      </div>

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
          name="test2"
          value={30}
          title="< 30000k"
        />
        <InputField
          handleChange={handleChange}
          name="test2"
          value={50}
          title="< 50000k"
        />
        <InputField
          handleChange={handleChange}
          name="test2"
          value={80}
          title="< 80000k"
        />
        <InputField
          handleChange={handleChange}
          name="test2"
          value={100}
          title="< 100000k"
        />
      </div>
    </div>
  )
}

export default Salary
