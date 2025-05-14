"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "About Me", path: "#about" },
  { name: "Testimonial", path: "#testimonial" },
  { name: "Pricing", path: "#pricing" },
  { name: "FAQs", path: "#faqs" },
  { name: "Contact Us", path: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1C2124] shadow-md p-4 sticky top-0 z-50">
      <div className="xl:container xl:mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="hover:text-blue-500 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-white">
          <button
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-white text-center font-medium bg-[#1C2124] p-4 rounded-md">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="block hover:text-blue-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
