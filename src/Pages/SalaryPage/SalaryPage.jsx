import React from 'react'
import PageHeader from '../../assets/Components/PageHeader'

const SalaryPage = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-24 px-4">
        <PageHeader title={"Estimated Salary"}/>

        <div className='mt-5'>
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
            // onClick={handleSearch}
          >
            Search
          </button>
        </div>

        </div>
      
    </div>
  )
}

export default SalaryPage
