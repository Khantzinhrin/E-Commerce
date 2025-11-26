import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ProductsDropdown from "./product";
import MobileProducts from "./mobileProduct";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import About from "../pages/About";
import { House } from 'lucide-react';
import LogIn from "../Profile/Login";

export default function NavBar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 880);
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { name: "Shirts", url: "/category/shirts" },
    { name: "Pants", url: "/category/pants" },
    { name: "Shoes", url: "/category/shoes" },
    { name: "Accessories", url: "/category/accessories" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 880);
      if (window.innerWidth >= 880) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
    <nav className="fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white/20 backdrop-blur-lg shadow-lg rounded-b-xl">
        <h1 className="text-xl font-japanese font-bold text-black">Horizon</h1>

        {/* Desktop Links */}
        {isDesktop && (
          <div className="flex items-center space-x-6">
            {/* <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            /> */}
            {/* Home link */}
            <Link to="/" className="hover:text-gray-700 text-black focus:text-indigo-600 focus:outline-none">Home</Link>

            {/* Desktop Products Dropdown */}
            <ProductsDropdown categories={categories} />
            {/* CORRECTED: Changed /About to /about */}
            <Link to="/about" className="hover:text-gray-700 text-black focus:text-indigo-600 focus:outline-none">
              About
            </Link>
            {/* Contact, Log In, and Sign Up links */}
            <Link to="/contact" className="hover:text-gray-700 text-black focus:text-indigo-600">Contact</Link>
            <Link to="/login" className="text-black hover:text-gray-700">Log In</Link>
            <Link to="/signup" className="text-black hover:text-gray-700">Sign Up</Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        {!isDesktop && (
          <div>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {!isDesktop && menuOpen && (
        <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-b-xl px-6 py-4 space-y-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* Mobile Home link */}
          <Link to="/" className="block text-black hover:text-gray-700"><House /></Link>

          {/* Mobile Products Collapsible */}
          <MobileProducts categories={categories} />

          {/* Mobile About link */}
          <Link to="/about" className="block text-black hover:text-gray-700">About</Link>
          <Link to="/contact" className="block text-black hover:text-gray-700">Contact</Link>
          <Link to="/login" className="block text-black hover:text-gray-700">Log In</Link>
          <Link to="/signup" className="block text-black hover:text-gray-700">Sign Up</Link>
        </div>
      )}
      <Routes>
         <Route path="/about" element={<About />} />
         <Route path="/login" element={<LogIn />} />
      </Routes>
    </nav>
    </BrowserRouter>
  );
}