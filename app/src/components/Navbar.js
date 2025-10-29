import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ProductsDropdown from "./product";
import MobileProducts from "./mobileProduct";

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
    <nav className="fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white/20 backdrop-blur-lg shadow-lg rounded-b-xl">
        <h1 className="text-xl font-japanese font-bold text-black">Horizon</h1>

        {/* Desktop Links */}
        {isDesktop && (
          <div className="flex items-center space-x-6">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <a href="#home" className="hover:text-gray-700 text-black">Home</a>

            {/* Desktop Products Dropdown */}
            <ProductsDropdown categories={categories} />

            <a href="#about" className="hover:text-gray-700 text-black">About</a>
            <a href="#contact" className="hover:text-gray-700 text-black">Contact</a>
            <a href="#login" className="text-black hover:text-gray-700">Log In</a>
            <a href="#signup" className="text-black hover:text-gray-700">Sign Up</a>
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
          <a href="#home" className="block text-black hover:text-gray-700">Home</a>

          {/* Mobile Products Collapsible */}
          <MobileProducts categories={categories} />

          <a href="#about" className="block text-black hover:text-gray-700">About</a>
          <a href="#contact" className="block text-black hover:text-gray-700">Contact</a>
          <a href="#login" className="block text-black hover:text-gray-700">Log In</a>
          <a href="#signup" className="block text-black hover:text-gray-700">Sign Up</a>
        </div>
      )}
    </nav>
  );
}
