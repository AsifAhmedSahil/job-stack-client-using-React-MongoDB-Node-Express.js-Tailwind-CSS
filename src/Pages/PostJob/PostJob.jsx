import React from "react";
import { useForm } from "react-hook-form";

const PostJob = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] xl:px-16 px-4 xl:py-10 py-4 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="lg:w-1/2 w-full">
                <label  className="text-lg mb-2 block"> Job Title </label>
                <input type="text" defaultValue={"web developer"} {...register("jobTitle")}  className="block w-full flex-1 border-1 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"/>

            </div>

          </div>

          <input type="submit" className="mt-5" />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
