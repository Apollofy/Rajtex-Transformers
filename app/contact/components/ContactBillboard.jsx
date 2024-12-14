"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactBillboard = () => {
  return (
    <div className='m-4'>
      <div className="relative w-full rounded-lg" style={{ height: '50vh' }}>
        <Image
          src="/contactBoard.jpg"
          alt="Contact Billboard"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-indigo-900 to-transparent opacity-80 rounded-lg"></div>

        
        <motion.div
          className="absolute right-32 translate-x-1/3 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold"
          initial={{ x: '65%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.div>
      </div>
    </div>
  );
};

export default ContactBillboard
