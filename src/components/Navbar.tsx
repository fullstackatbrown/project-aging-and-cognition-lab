import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerImage from '../assets/hifi.png'
import logo from '../assets/brown_log.png'

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle navigation to different pages
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after selecting an option
  };

  const handleScrollToContacts = () => {
    navigate("/");
    setIsDropdownOpen(false);
    setTimeout(() => {
      document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
    }, 0); // Scroll to "Contacts" after navigation
  };

  return (
    <>
    <div className="relative mx-auto mt-[50px] mb-[30px]">

    <img 
        src={logo} 
        alt="Brown Logo" 
        className="absolute top-[-31px] left-[1150px] h-[38px] w-[219px]"
      />

      

      <header
        className="h-[230px] w-[995px] bg-contain bg-left bg-no-repeat flex flex-col items-center justify-center text-[#170303] mx-auto mt-[50px] p-5 ml-[54px] mr-[231px] mb-[50px]"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
    
         
        
      </header>

      
      </div>

      

      <nav className="h-[61px] flex justify-center bg-[#F1DDCE] py-3">
  <button 
    onClick={() => handleNavigation("/")} 
    className=" h-[46px] w-[79px] px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors mr-4 ml-[520px]"
  >
    Home
  </button>
  <div className="flex space-x-6">
    <button 
      onClick={() => handleNavigation("/research")} 
      className="h-[46px] w-[244px] px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors"
    >
      Research and Publications
    </button>
    <button 
      onClick={() => handleNavigation("/news")} 
      className="h -[49px] w-[72px] px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors"
    >
      News
    </button>
    <button 
      onClick={() => handleNavigation("/members")} 
      className="h -[49px] w-[150px] px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors"
    >
      Lab Members
    </button>
    <button 
      onClick={handleScrollToContacts} 
      className=" h -[49px] w-[113px] px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors ml-[1099px]"
    >
      Contacts
    </button>
  </div>
</nav>
    </>
  );
}