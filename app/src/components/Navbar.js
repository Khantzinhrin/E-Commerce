import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // for hamburger icons

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 
                      bg-white/20 backdrop-blur-lg shadow-lg 
                      rounded-b-xl">
        {/* Logo */}
        <h1 className="text-xl font-bold text-black">E-Commerce Site</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:underline text-black">Home</a>
          <a href="#products" className="hover:underline text-black">Products</a>
          <a href="#about" className="hover:underline text-black">About</a>
          <a href="#contact" className="hover:underline text-black">Contact</a>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <a href="#login" className="text-black hover:underline">Log In</a>
          <a href="#signup" className="text-black hover:underline">Sign Up</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg shadow-lg rounded-b-xl px-6 py-4 space-y-4">
          <a href="#home" className="block text-black hover:underline">Home</a>
          <a href="#products" className="block text-black hover:underline">Products</a>
          <a href="#about" className="block text-black hover:underline">About</a>
          <a href="#contact" className="block text-black hover:underline">Contact</a>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <a href="#login" className="block text-black hover:underline">Log In</a>
          <a href="#signup" className="block text-black hover:underline">Sign Up</a>
        </div>
      )}
    </nav>
  );
}
