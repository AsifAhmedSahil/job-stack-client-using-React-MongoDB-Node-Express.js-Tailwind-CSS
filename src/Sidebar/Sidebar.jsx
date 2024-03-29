import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingDate from './jobPostingDate'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'



const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-2'>
        <h3 className='text-lg mb-2 font-bold'>Filters</h3>
        <Location handleChange={handleChange}/>
        
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <JobPostingDate handleChange={handleChange}/>
        <WorkExperience handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>
      
    </div>
  )
}

export default Sidebar
