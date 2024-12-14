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
        <p className="text-2xl leading-relaxed text-gray-800 mb-6">
          <Typewriter
            words={[
              'Rajtex Transformers & Electricals was established in the year 1999. We are able to efficiently design high technology products that are appreciated for optimum performance and durability. In our manufacturing philosophy, quality is a way of life. Quality assurance starts from the selection of the most suitable raw materials. We also conduct routine tests at every level of production so that errors can be detected right at the apex of manufacturing procedures.',
            ]}
            typeSpeed={2}
          />
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
      </div>
    </div>
  );
};

export default Description;