import React from "react";
import { motion } from "framer-motion";

const Orgs = () => {
  const cards = [
    { id: 1, image: "/accufirm.png", alt: "Accufirm" },
    { id: 2, image: "/bloomly.png", alt: "Bloomly" },
    { id: 3, image: "/brighto.png", alt: "Brighto" },
    { id: 4, image: "/digancy.png", alt: "Digancy" },
    { id: 5, image: "/fincco.png", alt: "Fincco" },
    { id: 6, image: "/keygenie.png", alt: "Keygenie" },
    { id: 7, image: "/mindwell.png", alt: "Mindwell" },
    { id: 8, image: "/skillspace.png", alt: "Skillspace" },
  ];

  const sentence = "Trusted by 25,000+ world-class brands and organizations of all sizes";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="p-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl font-bold text-center mb-8"
      >
        {sentence.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className={`inline-block mr-1 cursor-default ${
              word.includes("25,000+") ? "text-indigo-500" : ""
            }`}
            whileHover={{
              y: -10,
              transition: {
                duration: 0.1,
                ease: "easeOut",
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-white shadow-lg rounded-lg p-4 flex items-center justify-center hover:shadow-xl transition-all"
          >
            <img
              src={card.image}
              alt={card.alt}
              className="h-16 w-40 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Orgs;
