'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
  '/image7.jpg',
  '/image8.jpg',
  '/image9.jpg'
]

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3))
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const renderImagesForCurrentSlide = () => {
    const startIndex = currentIndex * 3
    return images.slice(startIndex, startIndex + 3)
  }

  return (
    <div className="relative w-full mx-auto h-[250px] overflow-hidden rounded-lg mt-2">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around space-x-4 p-2">
        {renderImagesForCurrentSlide().map((src, index) => (
          <div 
            key={index} 
            className="relative w-1/3 h-full max-w-[300px]"
          >
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              fill
              style={{ 
                objectFit: 'cover', 
                borderRadius: '0.5rem' 
              }}
              className="shadow-lg"
              priority={index === 0}
              sizes="(max-width: 768px) 33vw, 300px"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {[...Array(Math.ceil(images.length / 3))].map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel