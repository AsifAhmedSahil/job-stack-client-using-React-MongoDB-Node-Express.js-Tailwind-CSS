import React from 'react'
import Location from './Location'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-2'>
        <h3 className='text-lg mb-2 font-bold'>Filters</h3>
        <Location handleChange={handleChange}/>
      
    </div>
  )
}

export default Sidebar
