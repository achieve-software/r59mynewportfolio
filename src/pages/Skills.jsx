import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { SiCss3, SiSass, SiSassAlt } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{ backgroundImage: `url('./images/9.jpg')` }}
      className="w-full bg-cover bg-center  h-screen bg-gray-200 text-gray-800 p-10 "
    >
      <div className="container flex justify-evenly ">
        <div className="frontend ">
          <img
            src="./images/a.png"
            alt=""
            className="w-72 h-auto  animate__animated animate__rotateInDownLeft shadow-xl border border-yellow-600"
          />
          <div className="fr flex justify-between">
            {" "}
            <div className="fr1">
              <div className="flex items-center mt-4">
                <AiFillHtml5
                  size={36}
                  style={{ color: "#E34F26" }}
                  className="mr-2  "
                />
                <span className="mr-2  ">HTML</span>
              </div>
              <div className="css-icon flex items-center mt-4  ">
                <SiCss3
                  size={36}
                  style={{ color: "#1572B6" }}
                  className="mr-2"
                />
                <span>CSS</span>
              </div>
              <div className="flex items-center mt-4  ">
                <BsBootstrapFill
                  size={36}
                  style={{ color: "#8E13FD" }}
                  className="mr-2"
                />
                <span>Bootstrap</span>
              </div>
              <div className="flex items-center mt-4">
                <FaSass
                  size={36}
                  style={{ color: "#FF00FF" }}
                  className="mr-2"
                />
                <span>Sass</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiJquery
                  size={36}
                  style={{ color: "#0865A6" }}
                  className="mr-2"
                />
                <span>Jquery</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiTypescript
                  size={36}
                  style={{ color: "#2D79C7" }}
                  className="mr-2"
                />
                <span>TypeScript</span>
              </div>
            </div>
            <div className="fr2">
              <div className="flex items-center mt-4  ">
                <FaReact
                  size={36}
                  style={{ color: "#00FFFF" }}
                  className="mr-2"
                />
                <span>React</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiMui
                  size={36}
                  style={{ color: "#007FFF" }}
                  className="mr-2"
                />
                <span>Material UI</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiAxios
                  size={36}
                  style={{ color: "#000000" }}
                  className="mr-2"
                />
                <span>Axios</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiTailwindcss
                  size={36}
                  style={{ color: "#36B7F0" }}
                  className="mr-2"
                />
                <span>Tailwind</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiNextdotjs
                  size={36}
                  style={{ color: "#000000" }}
                  className="mr-2"
                />
                <span>Next.Js</span>
              </div>
            </div>
          </div>
        </div>
        <div  >
        <img
            src="./images/S.png"
            alt="DDD"
            className="w-96 h-auto  animate__animated animate__fadeInDown shadow-xl border border-slate-950"
          /></div> {/* Line */}
        <div className="backend ">
          <img
            src="./images/b.png"
            alt=""
            className="w-72 h-auto animate__animated animate__rotateInDownRight  shadow-xl border border-violet-800"
          />
          <div className="flex items-center mt-4">
            <FaNode size={36} style={{ color: "#68A063" }} className="mr-2" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center mt-4">
            <SiExpress size={36} style={{ color: "#E9BE0F" }} className="mr-2" />
            <span>Express.js</span>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Skills;
