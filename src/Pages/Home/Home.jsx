import React, { useEffect, useState } from "react";
import Bannar from "../../assets/Components/Bannar";
import Card from "../../assets/Components/Card";
import Jobs from "../Jobs/Jobs";
import Sidebar from "../../Sidebar/Sidebar";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [currentPage,setCurrentPage] = useState(1)
  const itemPerPage = 6

  useEffect(() => {
    setIsLoading(true)
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setJobs(data);
        setIsLoading(false)
      });
  }, []);

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  // jobs filtered by job title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems);

  // ---------------radio based filtering-----------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // --------------------button based filtering----------------------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // calculate the index range or pagination

  const calculatePageIndex = () =>{
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return  {startIndex,endIndex}
  }

  // calculate next page function
  const nextPage = () =>{
    if(currentPage < Math.ceil(filteredItems.length / itemPerPage)){
      setCurrentPage(currentPage + 1)
    }
  }

  // calculate previous page function
  const previousPage = () =>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  // main functions

  const filteredData = (jobs, selected, query) => {
    let filteredjobs = jobs;

    // filtering input items
    if (query) {
      filteredjobs = filteredItems;
    }

    // category filtering
    if (selected) {
      filteredjobs = filteredjobs.filter(
        ({
          maxPrice,
          salaryType,
          jobLocation,
          postingDate,
          experienceLevel,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredjobs);
    }

    // slice data based on current page
    const {startIndex,endIndex} = calculatePageIndex();
    filteredjobs = filteredjobs.slice(startIndex,endIndex)
     
    return filteredjobs.map((data, i) => <Card key={i} data={data} />);
  }

  const result = filteredData(jobs, selectedCategory, query);
  console.log(result)
  return (
    <div>
      <Bannar query={query} handleInput={handleInput} />

      <div className='bg-[#FAFAFA] md:grid grid-cols-4 md:px-24 px-4 py-12'>
        {/* {----------left side ---------} */}
        <div className='bg-white p-4 rounded'><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>


        {/* {-----------job card  -----------} */}
        <div className='bg-white p-4 rounded col-span-2'>
          {
            isLoading ? <p>Loading...</p> : result.length > 0 ? (<Jobs result = {result}/>) : <>
              <h3 className="text-lg font-bold mb-3">{result.length} jobs</h3>
              <p>No Jobs Found</p>
            </>
          }

          {/* pagination */}
          {
            result.length > 0 ? (
              <div className="flex justify-center mt-5 space-x-8">
                <button onClick={previousPage} disabled={currentPage === 1} className="hover:underline">Previos</button>
                <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemPerPage)}</span>
                <button onClick={nextPage} className="hover:underline" disabled={currentPage === Math.ceil(filteredItems.length > itemPerPage)}>Next</button>
              </div>
            ) : ""
          }
       
          </div>


        
        {/* {----------right side ---------} */}
        <div className='bg-white p-4 rounded'>right</div>
      
      
    </div>
    </div>
  );
};

export default Home;
