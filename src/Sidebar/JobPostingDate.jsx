import React from 'react'
import InputField from '../assets/Components/InputField'

const JobPostingDate = ({handleChange}) => {
    const now = new Date()
    const lastTwentyFourHourAgo = new Date(now - 24*60*60*1000)
    const sevenDaysAgo = new Date(now - 7* 24*60*60*1000)
    const thirtyDaysAgo = new Date(now - 30* 24*60*60*1000)

    // convert to string
    const lastTwentyFourHourAgoDate = lastTwentyFourHourAgo.toISOString().slice(0,10)
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10)
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0,10)
    // console.log(lastTwentyFourHourAgoDate)

    
  return (
    <div>
    <h3 className="font-serif text-lg mb-3">Date Of Posting</h3>

    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span> All Time
      </label>

      <InputField
        handleChange={handleChange}
        name="test"
        value={lastTwentyFourHourAgoDate}
        title="Last 24 Hours"
      />
      <InputField
        handleChange={handleChange}
        name="test"
        value={sevenDaysAgoDate}
        title="Last 7 Days"
      />
      <InputField
        handleChange={handleChange}
        name="test"
        value={thirtyDaysAgoDate}
        title="Last Month"
      />
      
    </div>
  </div>
  )
}

export default JobPostingDate
