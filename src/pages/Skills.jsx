import React from "react";
import { AiFillHtml5 } from 'react-icons/ai';
import { FaNode } from 'react-icons/fa';
import { SiCss3, SiSass, SiSassAlt } from 'react-icons/si';
import { BsBootstrapFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div
      style={{ backgroundImage: `url('./images/9.jpg')` }}
      className="w-full bg-cover bg-center  h-screen bg-gray-200 text-gray-800 p-10 "
    >
      <div className="container flex justify-evenly ">
        <div className="frontend ">
          <img src="./images/a.png" alt="" className="w-96 h-auto  animate__animated animate__backInLeft" />
          <div className="flex items-center mt-4">
            <AiFillHtml5 size={24} style={{ color: '#E34F26' }} className="mr-2" />
            <span>HTML</span>
          </div >
          <div className="css-icon flex items-center mt-4">
          <SiCss3 size={24} style={{ color: '#1572B6' }} className="mr-2"  />
          <span>CSS</span>
        </div>
        <div className="flex items-center mt-4">
            <BsBootstrapFill size={24} style={{ color: '#8E13FD' }} className="mr-2" />
            <span>Bootstrap</span>
          </div >
        </div>
        <div className="border-r-2 border-gray-400"></div>
        <div className="backend ">
          <img src="./images/b.png" alt="" className="w-96 h-auto animate__animated animate__backInRight" />
          <div className="flex items-center mt-4">
            <FaNode size={24} style={{ color: '#68A063' }} className="mr-2" />
            <span>Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
