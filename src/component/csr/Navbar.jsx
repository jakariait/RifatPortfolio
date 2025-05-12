"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Optional: Lucide icons or use any icon lib

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Testimonial", path: "/testimonial" },
  { name: "Ebook", path: "/ebook" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1C2124] shadow-md p-4 sticky top-0 z-50" >
      <div className="xl:container xl:mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/public">
          <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-white ">
          <button className={"cursor-pointer border-1 border-green-600"}  onClick={() => setMenuOpen(!menuOpen) }>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-white text-center font-medium bg-[#1C2124] p-4 rounded-md">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="block hover:text-blue-500 transition-colors"
                onClick={() => setMenuOpen(false)} // close on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
