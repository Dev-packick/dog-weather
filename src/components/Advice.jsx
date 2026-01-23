// src/components/Advice.jsx
import React from 'react';
import { FaDog, FaSun, FaCloudRain, FaWind, FaSnowflake } from 'react-icons/fa';

const Advice = ({ weather }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaDog className="text-amber-700" /> Conseils canins
      </h2>
      
      <div className="space-y-6">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-2">Sortie recommandée ?</h3>
          <p className="text-gray-700 mb-3">{weather.dogAdvice}</p>
          <div className={`inline-block px-4 py-2 rounded-full font-bold ${weather.canGoOut ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {weather.canGoOut ? '✅ Oui, votre chien peut sortir' : '⛔ Non, mieux vaut rester à la maison'}
          </div>
        </div>
        
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
          <h3 className="font-bold text-lg text-blue-800 mb-2">Précautions</h3>
          <ul className="text-gray-700 space-y-2">
            {weather.temperature > 30 && (
              <li className="flex items-start gap-2">
                <FaSun className="text-orange-500 mt-1" /> Évitez les heures les plus chaudes (risque de coup de chaleur)
              </li>
            )}
            {weather.condition.toLowerCase().includes('pluie') && (
              <li className="flex items-start gap-2">
                <FaCloudRain className="text-blue-500 mt-1" /> Pensez à sécher votre chien après la promenade
              </li>
            )}
            {weather.windSpeed > 20 && (
              <li className="flex items-start gap-2">
                <FaWind className="text-gray-500 mt-1" /> Attention aux vents forts qui peuvent effrayer votre chien
              </li>
            )}
            {weather.temperature < 0 && (
              <li className="flex items-start gap-2">
                <FaSnowflake className="text-blue-300 mt-1" /> Protégez les pattes de votre chien du froid
              </li>
            )}
            <li className="flex items-start gap-2">
              <FaDog className="text-amber-700 mt-1" /> Toujours avoir de l'eau disponible pendant la promenade
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Advice;