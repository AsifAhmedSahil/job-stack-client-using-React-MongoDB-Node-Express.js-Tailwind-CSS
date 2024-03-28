import React, { useEffect, useState } from 'react'
import Bannar from '../../assets/Components/Bannar'

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [jobs,setJobs] = useState([])

  useEffect(() =>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setJobs(data)
    })
  },[])

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  // jobs filtered by job title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  console.log(filteredItems)
  return (
    <div>
      <Bannar query={query} handleInput={handleInput} />
    </div>
  )
}

export default Home
