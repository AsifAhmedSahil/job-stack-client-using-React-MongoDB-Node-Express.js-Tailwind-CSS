import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className='py-24 mt-4 bg-[#FAFAFA] flex items-center justify-center'>
        <div>
            <h2 className='text-center text-blue text-3xl font-bold'>{title}</h2>
        </div>
      
    </div>
  )
}

export default PageHeader
