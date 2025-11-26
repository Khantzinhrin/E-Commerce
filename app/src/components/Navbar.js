import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ProductsDropdown from "./product";
import MobileProducts from "./mobileProduct";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

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

        {isDesktop && (
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-700 text-black">Home</Link>
            <ProductsDropdown categories={categories} />
            <Link to="/about" className="hover:text-gray-700 text-black">About</Link>
            <Link to="/contact" className="hover:text-gray-700 text-black">Contact</Link>
            <Link to="/login" className="text-black hover:text-gray-700">Log In</Link>
            <Link to="/signup" className="text-black hover:text-gray-700">Sign Up</Link>
          </div>
        )}

        {!isDesktop && (
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        )}
      </div>

      {!isDesktop && menuOpen && (
        <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-b-xl px-6 py-4 space-y-4">
          <Link to="/" className="block text-black"><House /></Link>
          <MobileProducts categories={categories} />
          <Link to="/about" className="block text-black">About</Link>
          <Link to="/contact" className="block text-black">Contact</Link>
          <Link to="/login" className="block text-black">Log In</Link>
          <Link to="/signup" className="block text-black">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
