import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { SiCss3, SiSass, SiSassAlt } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiSqllite } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiDjango } from "react-icons/di";

const Skills = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{ backgroundImage: `url('./images/background.jpg')` }}
      className="w-full bg-cover bg-center  h-screen bg-gray-200 text-gray-800 p-10 "
    >
      <div className="container flex justify-evenly  ">
        <div className="frontend  ">
          <div className="foto-fr flex justify-center">
            <img
              src="./images/a.png"
              alt=""
              className="w-72 h-auto  animate__animated animate__rotateInDownLeft shadow-xl border border-yellow-600"
            />
          </div>

          <div className="fr flex justify-between">
            {" "}
            <div className="fr1 mt-10">
              <div className="flex items-center mt-4">
                <AiFillHtml5
                  size={36}
                  style={{ color: "#E34F26" }}
                  className="mr-2  "
                />
                <span className="mr-2 text-xl   ">HTML</span>
              </div>
              <div className="css-icon flex items-center mt-4  ">
                <SiCss3
                  size={36}
                  style={{ color: "#1572B6" }}
                  className="mr-2"
                />
                <span className="mr-2 text-xl   ">CSS</span>
              </div>
              <div className="flex items-center mt-4  ">
                <BsBootstrapFill
                  size={36}
                  style={{ color: "#8E13FD" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Bootstrap</span>
              </div>
              <div className="flex items-center mt-4">
                <FaSass
                  size={36}
                  style={{ color: "#FF00FF" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Sass</span>
              </div>
            </div>
            <div className="fr2 mt-10">
              <div className="flex items-center mt-4  ">
                <SiJquery
                  size={36}
                  style={{ color: "#0865A6" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Jquery</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiTypescript
                  size={36}
                  style={{ color: "#2D79C7" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">TypeScript</span>
              </div>
              <div className="flex items-center mt-4  ">
                <FaReact
                  size={36}
                  style={{ color: "#00FFFF" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">React</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiStyledcomponents
                  size={36}
                  style={{ color: "#E7927B" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Styled-Components</span>
              </div>
            </div>
            <div className="fr3 mt-10">
              <div className="flex items-center mt-4  ">
                <SiMui
                  size={36}
                  style={{ color: "#007FFF" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Material UI</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiAxios
                  size={36}
                  style={{ color: "#000000" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Axios</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiTailwindcss
                  size={36}
                  style={{ color: "#36B7F0" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Tailwind</span>
              </div>
              <div className="flex items-center mt-4  ">
                <SiNextdotjs
                  size={36}
                  style={{ color: "#000000" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Next.Js</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./images/c.png"
            alt="DDD"
            className="w-96 h-auto  animate__animated animate__fadeInDown shadow-xl border border-slate-950"
          />
        </div>{" "}
        {/* Line */}
        <div className="backend ">
          <div className="img-back">
            <img
              src="./images/b.png"
              alt=""
              className="w-72 h-auto animate__animated animate__rotateInDownRight  shadow-xl border border-violet-800"
            />
          </div>

          <div className="bck flex justify-between">
            <div className="bck1 mt-10">
              {" "}
              <div className="flex items-center mt-4">
                <FaNode
                  size={36}
                  style={{ color: "#68A063" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Node.js</span>
              </div>
              <div className="flex items-center mt-4">
                <SiExpress
                  size={36}
                  style={{ color: "#E9BE0F" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Express.js</span>
              </div>
              <div className="flex items-center mt-4">
                <AiOutlineConsoleSql
                  size={36}
                  style={{ color: "#D47131" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">SQL</span>
              </div>
              <div className="flex items-center mt-4">
                <DiSqllite
                  size={36}
                  style={{ color: "#1F7C8B" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Sqlite</span>
              </div>
            </div>
            <div className="bck2 mt-10">
              {" "}
              <div className="flex items-center mt-4">
                <SiPostgresql
                  size={36}
                  style={{ color: "#305D8D" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">PostgreSQL</span>
              </div>
              <div className="flex items-center mt-4">
                <SiMysql
                  size={36}
                  style={{ color: "#E58E01" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">MySQL</span>
              </div>
              <div className="flex items-center mt-4">
                <SiMongodb
                  size={36}
                  style={{ color: "#4DA53F" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">MongoDB</span>
              </div>
              <div className="flex items-center mt-4">
                <DiDjango
                  size={36}
                  style={{ color: "#003A2B" }}
                  className="mr-2"
                />
                <span  className="mr-2 text-xl   ">Django</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm mt-40 font-black">
      achieve-software &copy; {currentYear} <hr />
      </p>
    </div>
  );
};

export default Skills;
