import React, { useState } from "react";
import { Menu, X, Home, User, Folder, Image, BookOpen, Share2, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">N. M. Azizur Rahman</div>
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#photo" className="hover:text-blue-500 transition">Photo Gallery</a>
            <a href="#publication" className="hover:text-blue-500 transition">Publication</a>
            <a href="#social" className="hover:text-blue-500 transition">Social</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Fixed Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 
        bg-gradient-to-b from-sky-100 to-blue-50 border-r border-blue-200
        text-gray-900 shadow-xl transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 space-y-6 text-base font-medium">
          <a href="#home" className="flex items-center gap-3 hover:text-blue-700 transition" onClick={toggleMenu}>
            <Home className="w-5 h-5" /> Home
          </a>
          <a href="#about" className="flex items-center gap-3 hover:text-blue-700 transition" onClick={toggleMenu}>
            <User className="w-5 h-5" /> About
          </a>
          <a href="#projects" className="flex items-center gap-3 hover:text-blue-700 transition" onClick={toggleMenu}>
            <Folder className="w-5 h-5" /> Projects
          </a>
          <a href="#photo" className="flex items-center gap-3 hover:text-blue-700 transition" onClick={toggleMenu}>
            <Image className="w-5 h-5" /> Photo Gallery
          </a>
          <a href="#publication" className="flex items-center gap-3 hover:text-blue-700 transition" onClick={toggleMenu}>
            <BookOpen className="w-5 h-5" /> Publication
          </a>
          <a href="#social" className="flex items-center gap-3 hover:text-blue-700 transition" onClick={toggleMenu}>
            <Share2 className="w-5 h-5" /> Social
          </a>
          <a href="#contact" className="flex items-center gap-3 hover:text-blue-700 transition" onClick={toggleMenu}>
            <Mail className="w-5 h-5" /> Contact
          </a>
        </div>
      </div>

      {/* Spacer for navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
