import React, { useEffect, useState } from "react";
import PageHeader from "../../assets/Components/PageHeader";

const SalaryPage = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);
  console.log(searchText);

  useEffect(() => {
    fetch("http://localhost:3000/salary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSalary(data);
      });
  }, [searchText]);

  const handleSearch = () => {
    const filter = salary.filter(
      (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    console.log(filter);

    setSalary(filter);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-24 px-4">
      <PageHeader title={"Estimated Salary"} />

      <div className="mt-5">
        <div className="text-center mb-4 mt-12">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text "
            name="search"
            id="search"
            className="lg:w-6/12 w-full py-2 pl-3 border focus:outline-none  mb-4"
          />
          <button
            className="bg-blue text-white py-2 px-8 mb-4 rounded-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* salary display card */}
      <div className="text-black">
        {salary.map((data) => (
          <div key={data._id}>
            <h4>{data.title}</h4>
            <p>{data.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryPage;
