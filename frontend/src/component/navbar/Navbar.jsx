// Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

const  Navbar = ()=>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-blue-600"><img className="w-10" src="/logo.png" alt="logo" /></NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/"  className={({isActive})=>isActive?"text-blue-500 font-semibold":"text-gray-700 hover:text-blue-600"}>Home</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive?"text-blue-500 font-semibold":"text-gray-700 hover:text-blue-600"}>Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <NavLink to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</NavLink>
          <NavLink to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
export default Navbar