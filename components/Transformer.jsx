"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Transformer = () => {
  return (
    <div className="m-4 p-2">
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "ease", duration:0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full mx-auto"
      >
        <Image
          src="/transformer.jpg" 
          alt="Transformer"
          layout="responsive"
          width={300} 
          height={300} 
          className="rounded-lg shadow-md shadow-black"
        />
      </motion.div>
    </div>
  );
};

export default Transformer;
