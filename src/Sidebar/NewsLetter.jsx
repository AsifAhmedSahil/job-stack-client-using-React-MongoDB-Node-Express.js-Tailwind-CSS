import React from 'react'
import { FaEnvelopeOpen, FaRocket } from 'react-icons/fa'

const NewsLetter = () => {
  return (
    <div>
      <div >
        
        <h3 className='flex justify-center items-center mb-3 gap-4 text-lg font-bold'> <FaEnvelopeOpen/> Email Me For Jobs</h3>
        <p className='text-primary text-base mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsam?</p>

        <div className='w-full space-y-4'>
            <input type="email" name='email' id='name' placeholder='Enter Email' className='w-full block pl-3 py-2 border focus:outline-none mb-4' />
            <input type="submit" value={"Subscribe"}  className='w-full block pl-3 py-2 border focus:outline-none rounded bg-blue text-white font-bold'/>
        </div>
      </div>

      {/* notice part or resume part */}

      <div className='mt-20'>
        
        <h3 className='flex justify-center items-center mb-3 gap-4 text-lg font-bold'> <FaRocket/> Get Notice Faster</h3>
        <p className='text-primary text-base mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsam?</p>

        <div className='w-full space-y-4'>
            
            <input type="submit" value={"Upload Your Resume"}  className='w-full block pl-3 py-2 border focus:outline-none rounded bg-blue text-white font-bold'/>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
