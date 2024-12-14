"use client"
import React from 'react'
import ServiceBillboard from './components/ServiceBillboard'
import Orgs from './components/Orgs'
import ServiceSection from './components/ServiceSection'

const page = () => {
  return (
    <div>
      <ServiceBillboard/>
      <ServiceSection/>
      <Orgs/>
    </div>
  )
}

export default page
