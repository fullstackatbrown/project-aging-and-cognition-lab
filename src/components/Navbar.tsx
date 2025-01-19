import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const logo = require("../assets/banner_higher_res.png");
  const brownLogo = require("../assets/brown_logo.png");

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
      document
        .getElementById("contacts")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 0); // Scroll to "Contacts" after navigation
  };

  return (
    <>
      <header className="h-[150px] bg-contain bg-center bg-no-repeat flex flex-col items-start justify-center text-[#170303] mx-auto mt-1 ml-2 pt-[40px]">
        <img
          src={logo}
          className="object-contain max-w-full max-h-full w-auto h-auto block"
          alt="Logo"
        />
        <img
          src={brownLogo}
          alt="Brown Logo"
          className="absolute top-0 right-0 w-[20rem]"
        />
      </header>

      <nav className="flex flex-row justify-end items-center bg-[#F1DDCE] my-5 py-3 px-5">
        <button
          onClick={() => handleNavigation("/")}
          className="flex px-4 py-3 text-black rounded-md bg-[#f6e9e0] hover:bg-[#d6beab] transition-colors mr-4"
        >
          Home
        </button>

        <button
          onClick={() => handleNavigation("/research")}
          className="flex px-4 py-3 text-black rounded-md bg-[#f6e9e0] hover:bg-[#d6beab] transition-colors mr-4"
        >
          Research & Publications
        </button>

        <button
          onClick={() => handleNavigation("/news")}
          className="flex px-4 py-3 text-black rounded-md bg-[#f6e9e0] hover:bg-[#d6beab] transition-colors mr-4"
        >
          News
        </button>

        <button
          onClick={() => handleNavigation("/members")}
          className="flex px-4 py-3 text-black rounded-md bg-[#f6e9e0] hover:bg-[#d6beab] transition-colors mr-4"
        >
          Lab Members
        </button>

        {/* Broken due to loading, you have to click twice. */}
        {/* <button
          onClick={handleScrollToContacts}
          className="flex px-4 py-2 text-black rounded-md hover:bg-[#d6beab] transition-colors"
        >
          Contact
        </button> */}
        <button className="flex text-black rounded-md bg-[#f6e9e0] hover:bg-[#d6beab] transition-colors">
          {/* <a href="join">
            <Button
              text="Join Us"
              className="bg-[#51AAAB] text-white rounded-xl hover:bg-[#327475] py-2 px-4"
            />
          </a> */}
        </button>
        <button className="flex px-4 py-3 text-black rounded-md bg-[#f6e9e0] hover:bg-[#d6beab] transition-colors">
          <a href="join">Join Us</a>
        </button>
      </nav>
    </>
  );
}
