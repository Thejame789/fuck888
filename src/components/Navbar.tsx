'use client'
import { Button } from '@mui/material';
import React from 'react'
import { FiMenu, FiX } from "react-icons/fi";



const Navbar = () => {
  // Declare
 const navItems = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Portfolio", href: "#portfolio" },
    { id: 5, name: "Blog", href: "#blog" },
    { id: 6, name: "Contact", href: "#contact" }
  ];

  // State 
  const [activeSection, setActiveSection] = React.useState("home");  
  const [isOpen , setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // function 
  const handleItemClick = (seaction : string) => {
    setActiveSection(seaction);
    setIsOpen(false);
    const element = document.getElementById(seaction);
    element?.scrollIntoView({behavior:"smooth"})   
  }

  
  return (
    <nav className='p-4 rounded-lg shadow-lg '> 
      <div className="flex item-center justify-between max-w-7xl mx-auto">
        <div className="text-white text-2xl font-bold rounded-md p-2">⛹️‍♂️WadaFuck888⚽️</div>
        <ul className="hidden md:flex flex-grow justify-center space-x-6 items-center">
          {navItems.map((item) =>
            <button
              key={item.id}
              onClick={() => handleItemClick(item.name.toLowerCase())}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
               ${scrolled ? "text-red-500" : " text-white"}
              hover:transform hover:scale-105                       
              `}

              aria-current={activeSection === item.name.toLowerCase() ? "page" : undefined}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
              transform origin-left transition-transform duration-300
              ${activeSection === item.name.toLowerCase() ? "scale-x-100" : "scale-0"}`}>
              </span>
            </button>

          )}
        </ul>
        <div className="md:hidden flex items-center">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-full
                bg-black bg-opacity-20 text-white hover:bg-opacity-30
                transition-all duration-300 hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

      </div>
      
        <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0"
        } overflow-hidde bg-gray-950/50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.name.toLowerCase())}
              className={`block w-full px-4 py-3 rounded-lg text-base font-medium
                transition-all duration-300 transform hover:scale-105
                ${activeSection === item.name.toLowerCase()
                  ? "text-white bg-gray-600/20"
                  : "text-white hover:bg-gray-600/10"}
                focus:outline-none focus:ring-2 focus:ring-white`}
              aria-current={activeSection === item.name.toLowerCase() ? "page" : undefined}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
