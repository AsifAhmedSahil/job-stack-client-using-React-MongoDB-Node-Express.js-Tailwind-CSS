import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const PostJob = () => {
  const [selectedOptions , setSelectedOptions] = useState(null)
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
          


          <input type="submit" className="mt-10 cursor-pointer font-bold px-8 py-2 block bg-blue text-white rounded mx-auto" />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
