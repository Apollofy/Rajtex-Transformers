"use client"
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Image from "next/image";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <div className="mx-auto w-full  px-1 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-900 text-center tracking-tight">
        RAJTEX TRANSFORMERS & ELECTRICALS
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - Text */}
        <div className="w-full bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-xl p-8">
          <p className="text-2xl leading-relaxed text-gray-800 mb-6  text-left lg:text-justify font-medium">
            <Typewriter
              words={[
                'Rajtex Transformers and Electricals, established in 1999, is a leading manufacturer of high-quality transformers and electrical equipment. The company is ISO, BIS, and BEE certified, ensuring compliance with international standards for safety, performance, and energy efficiency. With a strong focus on innovation and reliability, Rajtex Transformers caters to a wide range of industries, providing tailor-made solutions for power distribution, transmission, and energy management. Their commitment to excellence, advanced manufacturing processes, and customer-centric approach has earned them a trusted reputation in the electrical sector.',
              ]}
              typeSpeed={2}
            />
          </p>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "ease", duration: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full"
        >
          <Image
            src="/transformer.jpg"
            alt="Transformer"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-lg shadow-md shadow-black"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Description;