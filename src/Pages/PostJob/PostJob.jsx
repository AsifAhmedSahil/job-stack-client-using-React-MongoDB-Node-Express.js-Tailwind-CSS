import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import Swal from "sweetalert2";

const PostJob = () => {
  const [selectedOptions , setSelectedOptions] = useState(null)
  const {
    register,
    handleSubmit,reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    fetch("http://localhost:3000/post-job" , {
      method: "POST",
      headers: {'content-type': "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data =>{
      console.log(data)
      if(data.insertedId){
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Job has been posted",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }))

  }

  const options = [
    {value: "JavaScript", label: "JavaScript"},
    {value: "React", label: "React "},
    {value: "Node", label: "Node"},
    {value: "Express", label: "Express"},
    {value: "Python", label: "Python"},
    {value: "C++", label: "C++"},
    {value: "Next", label: "Next"},
    {value: "HTML", label: "HTML"},
    {value: "CSS", label: "CSS"}
  ]

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] xl:px-16 px-4 xl:py-10 py-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row------------ */}

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Job Title </label>
              <input
                type="text"
                defaultValue={"web developer"}
                {...register("jobTitle")}
                className="block w-full flex-1 border-1 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Company Name </label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row ------------- */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Min Salary </label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="block w-full flex-1 border-1 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Max Salary </label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row -------------- */}

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Salary Type </label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Job Location </label>
              <input
                type="text"
                placeholder="Ex: New York"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row --------------- */}

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Job Posting Date </label>
              <input
                type="date"
                placeholder="Ex: 2023-10-28"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Experience Level </label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value="">Choose Experience Level</option>
                <option value="Any experience">No Experience</option>
                <option value="Work remotely">Work remotely</option>
                <option value="Intership">Intership</option>
              </select>
            </div>
          </div>

          {/* 5th row----------- */}

          <div>
            <label className="text-lg mb-2 block"> Required Skill Sets: </label>
            <CreatableSelect
             className="create-job-input"
             defaultValue={selectedOptions}
             onChange={setSelectedOptions}
             options={options}
             isMulti
            />

          </div>

          {/* 6th row --------- */}

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Company Logo </label>
              <input
                type="url"
                placeholder="Your Company logo url"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="text-lg mb-2 block"> Employement Type </label>
              <select {...register("employmentType")} className="create-job-input">
                <option value="">Choose Employment Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th Row--------- */}

          <div className="w-full">
          <label className="text-lg mb-2 block"> Job Description </label>
          <textarea {...register("description")} placeholder="Enter You Job Details Here" className="py-1.5 pl-3 text-gray-800 w-full focus:outline-none" rows={6}/>



          </div>


          {/* Last Row---------- */}

          <div className="w-full">
          <label className="text-lg mb-2 block"> Job Posted By: </label>
              <input
                type="email"
                placeholder="Enter Your Email "
                {...register("postedBy")}
                className="create-job-input"
              />


          </div>
          


          <input type="submit" className="mt-10 cursor-pointer font-bold px-8 py-2 block bg-blue text-white rounded mx-auto" />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
