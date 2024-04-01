import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import PageHeader from "../../assets/Components/PageHeader";

const MyJobs = () => {
  const email = "sahil@gmail.com";
  const [isLoading, setISLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;


//   const { data: job = [], refetch } = useQuery({
//     queryKey: ["jobs"],
//     queryFn: async () => {
//       const res = fetch(`http://localhost:3000/myJobs/${email}`)
      
//       return res.data;
//       console.log(data)
//     },
// })

  useEffect(() => {
    setISLoading(true);
    fetch(`http://localhost:3000/myJobs/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        setISLoading(false);
      });
  }, [searchText]);

  // pagination calculation

  const indexOfLaseItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLaseItem - itemPerPage;
  const currentJob = jobs.slice(indexOfFirstItem, indexOfLaseItem);

  // next page btn

  const nextPage = () => {
    if (indexOfLaseItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    // console.log(filter)
    setJobs(filter);
    setISLoading(false);
  };

  const handleDelete = (id, jobTitle) => {
    // fetch(`http://localhost:3000/job/${id}`,{
    //   method:"DELETE"
    // })
    // .then(res => res.json())
    // .then(data =>{
    //   console.log(data)
    //   if(data.deletedCount > 0){

    //   }

    // })

    Swal.fire({
      title: "Are you sure?",
      text: `Want to delete this job ${jobTitle} job ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/job/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${data.jobTitle} job has been deleted.`,
                icon: "success",
              });
            }
            
          });
      }
    });
  };
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-24 px-4">
      <PageHeader title={"My Job Page"}/>
      <div>
        <h1 className="text-center text-2xl mt-6 mb-4">All My Jobs</h1>
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

        <div>
          <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        All Jobs
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <Link to="/post-job">
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Post a job
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="block w-full overflow-x-auto">
                  <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          No.
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Title
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Company Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Salary
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Edit
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Delete
                        </th>
                      </tr>
                    </thead>

                    {isLoading ? (
                      <div className="text-2xl text-blue">Loading...</div>
                    ) : (
                      <tbody>
                        {currentJob.map((job, index) => (
                          <tr key={index}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {index + 1}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              {job.jobTitle}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {job.companyName}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                              $ {job.minPrice}k - $ {job.maxPrice}k
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <button className="">
                                <Link to={`/edit-job/${job._id}`}>
                                  <FaEdit
                                    size={20}
                                    className="text-blue"
                                  ></FaEdit>
                                </Link>
                              </button>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <Link
                                onClick={() =>
                                  handleDelete(job._id, job.jobTitle)
                                }
                              >
                                <FaTrashAlt
                                  size={20}
                                  className="text-red-600"
                                ></FaTrashAlt>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
              <div className="text-center text-base text-black space-x-8 mt-8">
                {currentPage > 1 && (
                  <button onClick={previousPage} className="focus:underline">
                    Previous
                  </button>
                )}
                {indexOfLaseItem < jobs.length && (
                  <button onClick={nextPage} className="focus:underline">
                    Next
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
