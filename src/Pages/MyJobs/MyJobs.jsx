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
    <div>
      my jobs: {jobs.length}
    </div>
  )
}

export default MyJobs
