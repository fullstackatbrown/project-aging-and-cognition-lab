import React from 'react'
import { useLocation } from 'react-router-dom';
import logo from '../assets/image.png'

export default function Footer() {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center space-x-4 p-5 bg-gray-100 border-t-2 border-gray-300">
      <p className="text-left">Website designed & developed by FSAB</p>
      <p className="text-center flex-grow">&copy; 2024 Aging and Cognition Lab</p>
      <img src={logo} className="h-8 ml-auto" alt="Website Logo" />
    </div>
  );
}


