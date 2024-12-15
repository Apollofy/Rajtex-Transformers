"use client"
import React from 'react';

const Dialog = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">{title}</h2>
        <p className="text-gray-700 mb-6 font-medium">{description}</p>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-800 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialog;

