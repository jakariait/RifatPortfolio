"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "About Me", path: "/#about" },
  { name: "Testimonial", path: "/#testimonial" },
  { name: "Case Study", path: "/casestudies" },
  { name: "Pricing", path: "/#pricing" },
  { name: "FAQs", path: "/#faqs" },
  { name: "Calculator", path: "/calculator" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact Us", path: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = (e, path) => {
    setMenuOpen(false);
    if (path.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = path.substring(2);
      const targetElement = document.getElementById(targetId);
      const navbar = document.querySelector("nav"); // Assuming 'nav' is your navbar element
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="bg-[#1C2124] shadow-md px-4 sticky top-0 z-50">
      <div className="xl:container xl:mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/20250514_224704.png"
            alt="Elevate With Rifat"
            className={"w-40 -m-2"}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                scroll={!item.path.startsWith("/#")}
                onClick={(e) => handleLinkClick(e, item.path)}
                className="hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-white border-2 border-[#EF6C00] flex items-center justify-center ">
          <button
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <ul className="mt-4 space-y-4 text-white text-center font-medium bg-[#1C2124] p-4 rounded-md">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                scroll={!item.path.startsWith("/#")}
                onClick={(e) => handleLinkClick(e, item.path)}
                className="block hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
