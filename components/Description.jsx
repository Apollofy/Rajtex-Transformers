"use client"
import React from 'react';
import CountUp from 'react-countup';
import { Typewriter } from 'react-simple-typewriter';

const Description = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-900 text-center tracking-tight">
        RAJTEX TRANSFORMERS & ELECTRICALS
      </h1>
      
      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-xl p-8 mb-12">
        <p className="text-2xl leading-relaxed text-gray-800 mb-6 text-justify">
          <Typewriter
            words={[
              'Rajtex Transformers and Electricals, established in 1999, is a leading manufacturer of high-quality transformers and electrical equipment. The company is ISO, BIS, and BEE certified, ensuring compliance with international standards for safety, performance, and energy efficiency. With a strong focus on innovation and reliability, Rajtex Transformers caters to a wide range of industries, providing tailor-made solutions for power distribution, transmission, and energy management. Their commitment to excellence, advanced manufacturing processes, and customer-centric approach has earned them a trusted reputation in the electrical sector.',
            ]}
            typeSpeed={2}
          />
        </p>
      </div>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            <CountUp end={91} duration={3} separator="," />K+
          </div>
          <p className="text-gray-700 font-medium">Projects Done</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            <CountUp end={84} duration={3} separator="," />K+
          </div>
          <p className="text-gray-700 font-medium">Happy Clients</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            <CountUp end={42} duration={3} separator="," />+
          </div>
          <p className="text-gray-700 font-medium">Company Support</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            <CountUp end={4.7} duration={3} separator="," decimals={1} />
          </div>
          <p className="text-gray-700 font-medium">Client Ratings</p>
        </div>
      </div> */}
    </div>
  );
};

export default Description;