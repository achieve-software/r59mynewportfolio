import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import React from "react";
import Soci from "../components/Soci";
import TableCard from "../components/TableCard";
import Button from "../components/Button";
import Type from "../components/Type";

const Home = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{ backgroundImage: `url('./images/background.jpg')` }}
      className="w-full bg-cover bg-center flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-800 p-10 "
    >
      <div>

       <h1 className="text-4xl mb-4 font-bold text-center font-serif text-custom-primary animate__animated animate__fadeInDown">
      Hi, I am Aykut Taş.
    </h1>
  

    <ul  className="text-2xl mb-4  text-center font-Dancing Script  ">
      <li className="animate__animated animate__fadeInUp">Full Stack Developer</li>
     
      <li  className="animate__animated animate__fadeInUp">Front-End & Back-End</li>
     
     
      
    </ul>
    <Type/>
    </div>
      <Soci />
      <Button/>
      <TableCard />
    
    
<br />
      <p className="text-sm mt-40 font-black">
      achieve-software &copy; {currentYear} <hr />
      </p>
      
      
    </div>
  );
};
export default Home;
