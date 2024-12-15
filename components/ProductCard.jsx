"use client"
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col h-full"
      onClick={onClick}
    >
      <div className="relative w-full h-0 pb-[75%] rounded-lg">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 rounded-lg"
        />
      </div>
      <div className="p-4 flex-grow text-center">
        <h2 className="text-2xl font-semibold text-indigo-600">{product.title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;

