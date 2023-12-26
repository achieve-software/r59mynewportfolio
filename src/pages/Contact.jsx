import React from 'react'
import Soci from '../components/Soci'
const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full   flex flex-col items-center justify-center mt-10 ">
        
        <Soci />
        <p className="text-center text-sm font-black underline pb-4">
        achieve-software &copy; {currentYear}
      </p>
    </div>
  )
}

export default Contact