import React, { useState } from "react";

export default function MobileProducts({ categories }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <span
        onClick={() => setOpen(!open)}
        className="block text-black font-semibold cursor-pointer"
      >
        Products {open ? "▲" : "▼"}
      </span>

      {open && (
        <ul className="pl-4 space-y-1">
          {categories.map((cat, index) => (
            <li key={index}>
              <a
                href={cat.url}  // normal <a> tag
                className="text-black hover:text-blue-500 block"
              >
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
