import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const logo = require('../assets/banner.png');

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
      <header
        className="h-[150px] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center text-[#170303] mx-auto my-5 p-5"
        style={{ backgroundImage: `url(${logo})` }}
      >
      </header>

      <nav className="flex justify-center bg-gray-200 py-3">
  <button 
    onClick={() => handleNavigation("/")} 
    className="px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors mr-4"
  >
    Home
  </button>
  <div className="flex space-x-6">
    <button 
      onClick={() => handleNavigation("/research")} 
      className="px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors"
    >
      Research and Publications
    </button>
    <button 
      onClick={() => handleNavigation("/news")} 
      className="px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors"
    >
      News
    </button>
    <button 
      onClick={() => handleNavigation("/members")} 
      className="px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors"
    >
      Lab Members
    </button>
    <button 
      onClick={handleScrollToContacts} 
      className="px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors"
    >
      Contacts
    </button>
  </div>
</nav>
    </>
  );
}