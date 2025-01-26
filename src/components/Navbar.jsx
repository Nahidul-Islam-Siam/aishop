'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../public/White Logo_Hotchpotch-01 1.svg';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Button from './Button';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" bg-black  py-4 px-8 relative mx-auto container "> {/* Added relative for absolute positioning of menu */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className='flex space-x-8'> {/* Removed unnecessary space-x-8 here */}
        <div className="flex items-center"> {/* Removed unnecessary space-x-8 here */}
          <Image src={logo} height={60} width={100} alt="logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-12 inter-font font-medium text-base text-[#FAFAFA]"> {/* Hidden on smaller screens */}
          <a href="#" className="hover:text-white transition duration-300">Demos</a>
          <a href="#" className="hover:text-white transition duration-300">About</a>
          <a href="#" className="hover:text-white transition duration-300">Blog</a>
          <a href="#" className="hover:text-white transition duration-300">Pages</a>
          <a href="#" className="hover:text-white transition duration-300">Contact</a>
        </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 inter-font"> {/* Hidden on smaller screens */}
          <button className="text-[#ffffff] inter-font hover:text-slate-300 border border-gray-600 px-4 py-2 rounded-md transition duration-300">
            Sign in
          </button>
          <Button>Get Started Free</Button>
        

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden"> {/* Shown only on smaller screens */}
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? < IoMdClose  className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 z-10 flex flex-col py-4 px-8 space-y-4"> {/* Absolute positioning */}
          <a href="#" className="text-[#FAFAFA] hover:text-white transition duration-300">Demos</a>
          <a href="#" className="text-[#FAFAFA] hover:text-white transition duration-300">About</a>
          <a href="#" className="text-[#FAFAFA] hover:text-white transition duration-300">Blog</a>
          <a href="#" className="text-[#FAFAFA] hover:text-white transition duration-300">Pages</a>
          <a href="#" className="text-[#FAFAFA] hover:text-white transition duration-300">Contact</a>
          <button className="text-[#ffffff] hover:text-slate-300 border border-gray-600 px-4 py-2 rounded-md transition duration-300">
            Sign in
          </button>
          <button className="bg-gradient-to-r text-[#ffffff] from-blue-500 to-purple-500 px-6 py-2 rounded-md hover:scale-105 transition duration-300">
            Get Started Free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;