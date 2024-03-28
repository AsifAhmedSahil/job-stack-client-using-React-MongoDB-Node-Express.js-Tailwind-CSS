
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Bannar = ({query,handleInput}) => {
  
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-primary text-5xl font-bold mb-3">
        Find Your <span className="text-blue">New Job</span> Today
      </h1>
      <p className="text-black/70 text-xl mb-8">
        Thousands of jobs in computer and engineering sector are here for you.
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4 ">
          <div className="flex  md:rounded-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full ">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent pl-8 py-1.5 text-gray-800 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInput}
              value={query}
            />
            <FaSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <div className="flex  md:rounded-s-none rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full ">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent pl-8 py-1.5 text-gray-800 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              
              
            />
            <IoLocationOutline className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <button type="submit" className=" px-8 py-2 text-white bg-blue md:rounded-s-none rounded">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Bannar;
