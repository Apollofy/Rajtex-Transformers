"use client"
import React from 'react'
import ContactBillboard from './components/ContactBillboard'
import GetInTouch from './components/GetInTouch'
import ContactForm from './components/ContactForm'
const page = () => {
  return (
    <div>
      <ContactBillboard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
        <GetInTouch />
        <ContactForm />
      </div>
    </div>
  )
}

export default page
