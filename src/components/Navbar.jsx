import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen  bg-gray-100">
      {/* Hamburger Menü Butonu */}
      <button
        className="sm:hidden fixed top-4 left-4 p-2 bg-blue-500 text-white rounded"
        onClick={toggleMenu}
      >
        {isOpen ? "Kapat" : "Menü"}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-indigo-300 p-4 w-64 ${
          isOpen ? "block" : "hidden"
        } sm:block `}
      >
        <div className="flex items-center justify-center mb-24">
          <img
            className="rounded-full border-2 border-white mt-4 w-48 h-48"
            src="./images/dg.png" // Profil fotoğrafınızın URL'sini ekleyin
            alt="Profil"
          />
        </div>
        <nav className="sm:block flex items-center justify-center">
          <ul style={{ backgroundImage: `url('./images/12.jpg')` }} className="rounded-lg  ">
            <li className="m-10 ">
              <Link
                to="/"
                className="text-white text-2xl font-black hover:text-black hover:bg-yellow-300 transition duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Home
              </Link>{" "}
              <hr />
            </li>

            <li className="m-10">
              <Link
                to="/skills"
                className="text-white text-2xl font-black   hover:text-black hover:bg-yellow-300 transition duration-300 ease-in-out  "
                onClick={toggleMenu}
              >
                Skills
              </Link>{" "}
              <hr />
            </li>
            <li className="m-10">
              <Link
                to="/projects"
                className="text-white text-2xl font-black  hover:text-black hover:bg-yellow-300 transition duration-300 ease-in-out  "
                onClick={toggleMenu}
              >
                Projects
              </Link>{" "}
              <hr />
            </li>
            <li className="m-10">
              <Link
                to="/about"
                className="text-white text-2xl font-black  hover:text-black hover:bg-yellow-300 transition duration-300 ease-in-out  "
                onClick={toggleMenu}
              >
                About
              </Link>{" "}
              <hr />
            </li>

            <li className="m-10">
              <Link
                to="/contact"
                className="text-white text-2xl font-black  hover:text-black hover:bg-yellow-300 transition duration-300 ease-in-out   "
                onClick={toggleMenu}
              >
                Contact
              </Link>{" "}
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
