import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
    <h3 className="text-lg font-bold mb-3">{result.length} jobs avaiable</h3>
    <div className="card-container">{result}</div>
    
    </>
    
    
  )
}

export default Jobs
