import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="p-8  bg-indigo-50 rounded-lg shadow-md m-4"
    >
      <h2 className="text-3xl font-bold text-yellow-500 text-center mb-6">SEND US A MESSAGE</h2>
      <form className="space-y-4">
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Your Phone Number"
            pattern="[0-9]*" 
            inputMode="numeric" 
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
