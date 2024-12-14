"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import { Zap, Building2, Factory, Hotel, Train, Radio } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 50 
      }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2 
      }}
    >
      <Icon className="w-12 h-12 text-yellow-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  )
}

const Serve = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Zap,
      title: "State Electricity Board",
      description: "The growing intra, as well as inter-regional electricity grid expansions, have led to growing opportunities"
    },
    {
      icon: Building2,
      title: "Hospitals",
      description: "Power transformers in hospitals are designed to isolate the patient and the operator from an electric shock"
    },
    {
      icon: Factory,
      title: "Furnace Industry",
      description: "Transformers play an important role in transporting electricity, therefore, maintaining a complete balance in electricity distribution"
    },
    {
      icon: Hotel,
      title: "Hospitality Industry",
      description: "The hotel stay can make or break a trip leaving lasting memories."
    },
    {
      icon: Train,
      title: "Railways",
      description: "Rail travel has been well-matched to a world that is becoming highly urbanised."
    },
    {
      icon: Radio,
      title: "Telecom Towers",
      description: "The telecom towers are inherent with giant machinery and equipment and therefore"
    }
  ]

  return (
    <div 
      ref={ref}
      className="relative bg-indigo-950 py-16 px-4 sm:px-6 lg:px-8 min-h-36 rounded-lg"
    >
      <div className="absolute inset-0 bg-[url('/industrial-bg.jpg')] bg-cover bg-center opacity-20" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : -50 
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            INDUSTRIES WE SERVE
          </h2>
          <h3 className="text-4xl font-bold text-white mb-8">
            We Are Committed To<br />Superior Quality & Results
          </h3>
          <Link href="/about" passHref>
            <motion.button
              className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover more
            </motion.button>
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Serve

