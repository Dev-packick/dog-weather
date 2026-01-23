// src/components/shared/components/Loader.jsx
import React from 'react';

const Loader = ({ message = "Chargement...", small = false }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex justify-center items-center h-96">
      <div className="text-center">
        <div className={`inline-block animate-spin rounded-full border-t-2 border-b-2 border-amber-600 mb-4 ${small ? 'h-8 w-8' : 'h-12 w-12'}`}></div>
        <p className="text-gray-700 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Loader;