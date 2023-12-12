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
        className={`bg-stone-700 p-4 w-64 ${
          isOpen ? "block" : "hidden"
        } sm:block `}
      >
        <div className="flex items-center justify-center mb-24">
          <img
            className="w-36 h-36 rounded-full border-2 border-white mt-"
            src="https://placekitten.com/200/201" // Profil fotoğrafınızın URL'sini ekleyin
            alt="Profil"
          />
        </div>
        <nav className="sm:block flex items-center justify-center">
          <ul className="bg-color bg-blue-950 rounded-lg">
            <li className="mb-10">
              <Link
                to="/"
                className="text-white text-2xl   hover:text-blue-600"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>

            <li className="mb-10">
              <Link
                to="/skills"
                className="text-white text-2xl   hover:text-blue-600"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li className="mb-10">
              <Link
                to="/projects"
                className="text-white text-2xl   hover:text-blue-600"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li className="mb-10">
              <Link
                to="/about"
                className="text-white text-2xl   hover:text-blue-600"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>

            <li className="mb-2">
              <Link
                to="/contact"
                className="text-white text-2xl   hover:text-blue-600"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            {/* Diğer sayfa linkleri buraya eklenebilir */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
