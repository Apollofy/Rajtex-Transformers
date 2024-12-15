import React from "react";
import { motion } from "framer-motion";

const Orgs = () => {
  const cards = [
    { id: 1, image: "/jvvnl.jpg", alt: "jvvl" },
    { id: 2, image: "/jdvvnl.png", alt: "jdvvnl" },
    { id: 3, image: "/avvnl.jpg", alt: "avvnl" },
    { id: 4, image: "/hcl.jpg", alt: "hcl" },
    { id: 5, image: "/gail.png", alt: "gail" },
    { id: 6, image: "/ignp.png", alt: "ignp" },
    { id: 7, image: "/inr.png", alt: "inr" },
    { id: 8, image: "/bits.jpg", alt: "bits" },
    { id: 9, image: "/phed.jpg", alt: "phed" },
    { id: 10, image: "/gci.jpg", alt: "gci" },
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
