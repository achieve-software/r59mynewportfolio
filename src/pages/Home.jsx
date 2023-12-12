import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import React from "react";
import Soci from "../components/Soci";
const Home = () => {
  return (
    <div style={{ backgroundImage: `url('./images/9.jpg')` }} className="w-full bg-cover bg-center flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-800 p-10 "    >
      <h1 className="text-5xl mb-2">Hi, I am Alex Victor</h1>
      <p className="text-xl mb-10 text-center">
        I am a full-stack developer. <br /> I have experience in developing
        websites, web applications, mobile games; <br /> (Android & iOS), and Flutter
        mobile applications. <br /> I provide clean code.
      </p>
      <Soci/>
     
      <p className="text-sm mt-10 font-black" >©2023  achieve-software <hr /></p> 
    </div>
  );
};
export default Home;