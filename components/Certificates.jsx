"use client"

import { Settings, FileCheck, PlugIcon as Pipeline, Award } from 'lucide-react'

const CertificateItem = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-[#1c1f3f] rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-900 hover:scale-105">
    <Icon className="w-16 h-16 text-yellow-400 mb-4" />
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-indigo-200 text-sm">{description}</p>
  </div>
)

const Certificates = () => {
  const certificates = [
    {
      icon: Settings,
      title: "Oldest Transformer Concern",
      description: "Established in 1999, Rajtex Transformers is the Oldest Transformers Manufacturing concern in North India."
    },
    {
      icon: FileCheck,
      title: "ISO, BIS & BEE Certified",
      description: "Rajtex Transformers is ISO, BIS & BEE Certified and we keep implementing the quality policy: 'Science & Technology in the lead'."
    },
    {
      icon: Pipeline,
      title: "Largest Production Capacity",
      description: "With state-of-the-art technology and equipment, we manufacture 3000 MVA transformers per year, having two units combined in North India."
    },
    {
      icon: Award,
      title: "Central Government Award",
      description: "In 2021, Rajtex received the NATIONAL ENERGY CONSERVATION AWARD for the 'MOST ENERGY EFFICIENT APPLIANCE OF THE YEAR 2021' from the Bureau of Energy Efficiency."
    }
  ]

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 mt-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, index) => (
            <CertificateItem key={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates

