import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };
  

  return (
    <div className="flex h-screen  ">
      {/* Hamburger Menü Butonu */}
      <button
        className="sm:hidden fixed top-4 left-4 p-2 bg-blue-500 text-white rounded"
        onClick={toggleMenu}
      >
        {isOpen ? "Kapat" : "Menü"}
      </button>

      {/* Sidebar */}
      <div
       style={{ backgroundImage: `url('./images/background.jpg')` }}
        className={`bg-indigo-300 p-4  ${
          isOpen ? "block" : "hidden"
        } sm:block `}
      >
        <div className="flex items-center justify-center mb-10">
          <img
            className="rounded-full border-2 border-white w-40 h-40"
            src="./images/dg.png" // Profil fotoğrafınızın URL'sini ekleyin
            alt="Profil"
          />
        </div>
        <nav className="sm:block flex items-center justify-center ">
          <ul
            style={{ backgroundImage: `url('./images/az.png')`, paddingTop:"1px" }}
            className="rounded-lg  "
          >
            <li className="m-10 ">
              <NavLink 
                to="/"
                className="text-gray-500  font-black hover:text-white   transition duration-300 ease-in-out  "
               
                
              >
                Home
              </NavLink>{" "}
              <hr />
            </li>

            <li className="m-10">
              <NavLink
                to="/skills"
                className="text-gray-500 font-black     hover:text-white transition duration-300 ease-in-out  "
                onClick={toggleMenu}
              >
                Skills
              </NavLink>{" "}
              <hr />
            </li>
            <li className="m-10">
              <NavLink
                to="/projects"
                className="text-gray-500 font-black    hover:text-white transition duration-300 ease-in-out  "
                onClick={toggleMenu}
              >
                Projects
              </NavLink>{" "}
              <hr />
            </li>
            <li className="m-10">
              <NavLink
                to="/about"
                className="text-gray-500 font-black    hover:text-white transition duration-300 ease-in-out  "
                onClick={toggleMenu}
              >
                About
              </NavLink>{" "}
              <hr />
            </li>

            <li className="m-10">
              <NavLink
                to="/contact"
                className="text-gray-500 font-black    hover:text-white transition duration-300 ease-in-out   "
                onClick={toggleMenu}
              >
                Contact
              </NavLink>{" "}
              <hr />
            </li>
            {/* Diğer sayfa linkleri buraya eklenebilir */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
