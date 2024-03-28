import React, { useEffect, useState } from "react";
import Bannar from "../../assets/Components/Bannar";
import Card from "../../assets/Components/Card";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setJobs(data);
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
     
    return filteredjobs.map((data, i) => <Card key={i} data={data} />);
  }

  const result = filteredData(jobs, selectedCategory, query);
  console.log(result)
  return (
    <div>
      <Bannar query={query} handleInput={handleInput} />

      <div>
        <Jobs result={result} />
      </div>
    </div>
  );
};

export default Home;
