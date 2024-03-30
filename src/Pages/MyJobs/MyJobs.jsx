import React, { useEffect, useState } from 'react'

const MyJobs = () => {
    const email = "sahil@gmail.com"
    const [isLoading,setISLoading] = useState(true);
    const [searchText,setSearchText] = useState("")
    const [jobs,setJobs] = useState([])

    useEffect(() =>{
        setISLoading(true)
        fetch(`http://localhost:3000/myJobs/${email}`)
        .then((res) => res.json())
        .then((data ) =>{
            console.log(data)
            setJobs(data);
        })
    },[])
  return (
    <div className='max-w-screen-2xl container mx-auto lg:px-24 px-4'>

      
      <div>
        <h1 className='text-center text-2xl mt-6 mb-4'>All My Jobs</h1>
        <div className='text-center mb-4 mt-12'>
          <input type="text " name='search' id='search' className='lg:w-6/12 w-full py-2 pl-3 border focus:outline-none  mb-4' />
          <button className='bg-blue text-white py-2 px-8 mb-4 rounded-sm'>Search</button>
        </div>

      </div>
    </div>
  )
}

export default MyJobs
