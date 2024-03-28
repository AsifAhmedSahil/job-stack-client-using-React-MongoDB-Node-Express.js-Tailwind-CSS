import React from 'react'

const Jobs = ({result}) => {
  return (
    <div className='bg-[#FAFAFA] md:grid grid-cols-4 md:px-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'>left</div>
        <div className='bg-white p-4 rounded col-span-2'>{result}</div>
        <div className='bg-white p-4 rounded'>right</div>
      
      
    </div>
  )
}

export default Jobs
