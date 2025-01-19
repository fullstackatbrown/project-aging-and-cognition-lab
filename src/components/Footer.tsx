import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const bannerLogo = require("../assets/banner.png");
  const fsabLogo = require("../assets/fsab-circle.png");

  return (
    <div className="flex items-center justify-between space-x-2 p-5 bg-gray-100 border-t-2 border-gray-300">
      <p className="flex flex-1 items-center gap-3 text-left font-mono text-[16px]">
        Developed by{" "}
        <a
          className="hover:text-[#51AAAB] text-[#327475] transition-colors"
          href="https://fullstackatbrown.com/"
        >
          Full Stack at Brown
        </a>
        <img src={fsabLogo} className="h-7" alt="FSAB Logo" />
      </p>
      <p className="flex-1 text-center flex-grow">
        &copy; 2025 Aging and Cognition Lab
      </p>
      <div className="flex-1">
        <img src={bannerLogo} className="h-8 ml-auto" alt="Website Logo" />
      </div>
    </div>
  );
}
