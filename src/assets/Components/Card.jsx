import React from 'react'
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FiCalendar, FiClock, FiDollarSign } from "react-icons/fi";

const Card = ({data}) => {
    const {companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,employmentType,description} = data;
  return (
    <section className='card'>
        <Link to={"/"} className='flex flex-col gap-4 sm:flex-row items-start'>
        <img className='w-20 h-20' src={companyLogo} alt="" />
        <div>
            <h4 className='text-primary mb-1'>{companyName}</h4>
            <h4 className='text-lg font-semibold mb-2'>{jobTitle}</h4>
            <div className='text-primary/70 text-base flex flex-wrap gap-4 mb-2'>
                <span className='flex items-center gap-2'><IoLocationOutline/>{jobLocation}</span>
                <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
                <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}</span>
                <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
            </div>
            <p className='text-primary/70 text-base'>{description}</p>
        </div>
        </Link>

    </section>
  )
}

export default Card
