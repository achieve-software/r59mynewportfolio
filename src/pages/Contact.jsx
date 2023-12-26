import React from 'react'
import Soci from '../components/Soci'
const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full   flex flex-col items-center justify-center mt-10 ">
       <button className='button1'
    >
    <span>DOWNLOAD MY CV</span>
    <div class="top"></div>
    <div class="left"></div>
    <div class="bottom"></div>
    <div class="right"></div>
    
</button>
        <Soci />
        <p className="text-center text-sm font-black underline pb-4">
        achieve-software &copy; {currentYear}
      </p>
    </div>
  )
}

export default Contact