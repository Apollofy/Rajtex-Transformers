"use client"

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  return (
    <header className="bg-[#1c1f3f] text-white flex flex-wrap justify-between md:justify-end items-center px-4 md:px-8 py-2 space-y-2 md:space-y-0">
      {/* Contact Details */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-y-0 md:space-x-6 w-full md:w-auto">
        <a 
          href="mailto:sales@rajtextransformers.com" 
          className="text-md  hover:text-yellow-500 transition-colors duration-300"
          aria-label="Send email to sales@rajtextransformers.com"
        >
          sales@rajtextransformers.com
        </a>
        <button 
          onClick={() => copyToClipboard('+91-1596-222-555')}
          className="text-md hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          aria-label="Copy phone number to clipboard"
        >
          +91-1596-222-555
          {copySuccess && <span className="ml-2 text-xs text-green-400">{copySuccess}</span>}
        </button>
      </div>
      
      {/* Vertical Divider */}
      <div className="hidden md:block mx-4 h-6 border-l border-gray-400"></div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {[
          { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
          { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
          { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
          { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black w-6 h-6 md:w-8 md:h-8 flex justify-center items-center rounded-full transform transition duration-300 ease-in-out hover:scale-110 hover:bg-indigo-500 hover:text-yellow-500"
            aria-label={`Visit our ${item.label} page`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

