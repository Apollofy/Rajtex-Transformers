"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClasses = (path) =>
    `transition duration-300 ${
      pathname === path
        ? "bg-indigo-600 text-yellow-100 px-3 py-2 rounded-full"
        : "hover:scale-105"
    }`;

  return (
    <nav className="bg-white text-indigo-800 font-semibold shadow-md rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain rounded-full"
            />
            <p className="ml-2 font-bold text-lg sm:text-xl md:text-2xl hidden sm:block">
              Rajtex Transformers & Electricals
            </p>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4 text-base xl:text-lg">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              About Us
            </Link>
            <Link href="/services" className={getLinkClasses("/services")}>
              Services
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact")}>
              Contact Us
            </Link>
          </div>

          {/* Get Started Button (visible on all screens) */}
          <div className="hidden sm:block">
            <Link
              href="/contact"
              className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-indigo-300 hover:text-black transition duration-300 text-sm md:text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl p-2">
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          <Link href="/" className={`block py-2 ${getLinkClasses("/")}`}>
            Home
          </Link>
          <Link
            href="/about"
            className={`block py-2 ${getLinkClasses("/about")}`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`block py-2 ${getLinkClasses("/services")}`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`block py-2 ${getLinkClasses("/contact")}`}
          >
            Contact Us
          </Link>
          <div className="sm:hidden pt-2">
            <Link
              href="/contact"
              className="block w-full text-center bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-indigo-300 hover:text-black transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

