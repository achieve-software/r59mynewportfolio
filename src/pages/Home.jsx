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
    <div className="w-full   flex flex-col items-center justify-center mt-10 ">
        <Button />

      <ul className="text-2xl  text-center font-Dancing Script  ">
        <li className="  font-bold text-center font-serif  animate__animated animate__fadeInDown">
        Hi, I am Aykut Taş.
        </li>
        <li className="text-xl animate__animated animate__fadeInUp">
          Full Stack Developer
        </li>

        <li className="text-xl animate__animated animate__fadeInUp">
          Front-End & Back-End
        </li>
      </ul>
      <Type />

      <Soci />
      <br />

      <TableCard />
      <br />
      <br />
    

      <p className="text-sm font-black underline mt-0">
        achieve-software &copy; {currentYear}
      </p>
    </div>
  );
};
export default Home;
