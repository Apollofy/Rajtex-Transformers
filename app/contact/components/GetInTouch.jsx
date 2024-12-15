import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const GetInTouch = () => {
  const handleClick = () => {
    window.open("https://maps.app.goo.gl/JroYyffDaTcniv2R9", "_blank");
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="p-16 bg-indigo-50 rounded-lg shadow-md  m-4"
    >
      
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">GET IN TOUCH</h2>

     
      <div className="space-y-6">
        
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt onClick= {handleClick} className="text-blue-500 text-2xl cursor-pointer hover:scale-110" />
          <div>
            <h3 className="text-lg font-semibold">Our Office</h3>
            <p className="text-gray-600 text-md">Surajgarh Road, Chirawa, Jhunjhunu, Rajasthan - 333026. (India)</p>
          </div>
        </div>

        
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-green-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p className="text-gray-600 text-md">sales@rajtextransformers.com</p>
          </div>
        </div>

        
        <div className="flex items-center space-x-4">
          <FaPhone className="text-yellow-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p className="text-gray-600">+91-1596-222-555</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
