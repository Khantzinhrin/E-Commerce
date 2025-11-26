import React, { useState } from "react";

export default function ProductsDropdown({ categories }) {
  const [show, setShow] = useState(false);

  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShow(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setShow(false), 150);
  };

  return (
    <div className="relative inline-block">
      <span
        className="hover:text-gray-700 text-black cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Products
      </span>
      {show && (
        <div
          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50"
          onMouseEnter={handleMouseEnter}  
          onMouseLeave={handleMouseLeave} 
        >
          {categories.map((cat, index) => (
            <a
              key={index}
              href={cat.url}
              className="block px-4 py-2 hover:bg-blue-100 text-black"
            >
              {cat.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
