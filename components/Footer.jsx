import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1c1f3f] text-white py-8">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-8 space-y-8 md:space-y-0">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <Image
              src="/logo.jpg" 
              alt="Raj Tex Transformers Logo"
              width={80} 
              height={80} 
              className="object-contain rounded-md border-2 border-indigo-300"
            />
          </div>
          <p className="text-md text-center md:text-left">
            <code>Rajtex Transformers & Electricals was established in the year 1999.</code>
          </p>
         
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black w-8 h-8 flex justify-center items-center rounded-full transform transition duration-300 ease-in-out hover:scale-110 hover:bg-indigo-600 hover:text-yellow-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black w-8 h-8 flex justify-center items-center rounded-full transform transition duration-300 ease-in-out hover:scale-110 hover:bg-indigo-600 hover:text-yellow-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black w-8 h-8 flex justify-center items-center rounded-full transform transition duration-300 ease-in-out hover:scale-110 hover:bg-indigo-600 hover:text-yellow-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black w-8 h-8 flex justify-center items-center rounded-full transform transition duration-300 ease-in-out hover:scale-110 hover:bg-indigo-600 hover:text-yellow-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-md">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">CONTACT US</h4>
          <p className="text-md">
            Surajgarh Road, Chirawa, Jhunjhunu, <br />
            Rajasthan - 333026. (India)
          </p>
          <p className="text-md mt-2">+91-1596-222-555</p>
          <p className="text-md mt-2">sales@rajtextransformers.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm">
        © 2024 All Rights Reserved | Raj Tex Transformers
      </div>
    </footer>
  );
};

export default Footer;
