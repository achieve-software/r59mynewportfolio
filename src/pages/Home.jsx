import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
      <div className="flex flex-col items-start justify-center h-screen bg-gray-200 text-gray-800 p-10">
        <h1 className="text-5xl mb-2">Hi, I am Alexandro Victor</h1>
        <p className="text-xl mb-10">I am full stack web developer. I have Experience in Developing Websites, Web Applications, Mobile Games (Android & iOS), and Flutter Mobile Applications. We are providing clean code.</p>
        <div className="flex space-x-4">
        <Link to="/facebook" className="text-blue-600 hover:underline">Facebook</Link>
          <Link to="/twitter" className="text-blue-600 hover:underline">Twitter</Link>
          <Link to="/github" className="text-blue-600 hover:underline">GitHub</Link>
          <Link to="/instagram" className="text-blue-600 hover:underline">Instagram</Link>
          <Link to="/linkedin" className="text-blue-600 hover:underline">LinkedIn</Link>
        </div>
        <p className="text-sm mt-10">©2021 Reactor Portfolio</p>
      </div>
    );
  
}

export default Home