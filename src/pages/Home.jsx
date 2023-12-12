import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import React from "react";
import Soci from "../components/Soci";
import Candle from "../components/Candle";
const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url('./images/9.jpg')` }}
      className="w-full bg-cover bg-center flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-800 p-10 "
    >
      <h1 className="text-6xl mb-4 font-bold text-center text-custom-primary">
        Hi, I am Alex Victor.
      </h1>
      <p className="text-2xl mb-8 text-center text-custom-secondary">
        I am a full-stack web developer specializing in frontend and backend.
        Combining my passion for coding with functional and aesthetic web
        solutions is not just a profession but also a passion for me.
      </p>

      <Soci />
      
       

      <p className="text-sm mt-10 font-black">
        ©2023 achieve-software <hr />
      </p>
      
      
    </div>
  );
};
export default Home;
