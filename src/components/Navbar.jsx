import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="flex h-screen bg-gray-100">
        {/* Hamburger Menü Butonu */}
        <button
          className="sm:hidden fixed top-4 left-4 p-2 bg-blue-500 text-white rounded"
          onClick={toggleMenu}
        >
          {isOpen ? 'Kapat' : 'Menü'}
        </button>
  
        {/* Sidebar */}
        <div className={`bg-blue-500 p-4 w-64 ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <div className="flex items-center justify-center mb-4">
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://placekitten.com/200/200"  // Profil fotoğrafınızın URL'sini ekleyin
              alt="Profil"
            />
          </div>
          <nav className="sm:block">
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-white hover:text-gray-200" onClick={toggleMenu}>
                  Ana Sayfa
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/hakkimda" className="text-white hover:text-gray-200" onClick={toggleMenu}>
                  Hakkımda
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/skills" className="text-white hover:text-gray-200" onClick={toggleMenu}>
                  Skills
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white hover:text-gray-200" onClick={toggleMenu}>
                  İletişim
                </Link>
              </li>
              {/* Diğer sayfa linkleri buraya eklenebilir */}
            </ul>
          </nav>
        </div>
  
        {/* Ana içerik */}
        <div className="flex-1 p-10">
          {/* Ana içerik buraya eklenebilir */}
        </div>
      </div>
      );
    };
    


export default Navbar