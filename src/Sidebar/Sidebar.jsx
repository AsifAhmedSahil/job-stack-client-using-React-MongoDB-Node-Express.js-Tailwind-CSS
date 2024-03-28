import React from 'react'
import Location from './Location'
import Salary from './Salary'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-2'>
        <h3 className='text-lg mb-2 font-bold'>Filters</h3>
        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick}/>
      
    </div>
  )
}

export default Sidebar
