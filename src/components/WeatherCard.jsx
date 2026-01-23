// src/components/WeatherCard.jsx (avec Tailwind v2)
import React from 'react';
import { 
  FaSun, 
  FaCloudSun, 
  FaCloud, 
  FaCloudRain, 
  FaSnowflake, 
  FaBolt, 
  FaSmog,
  FaTemperatureHigh,
  FaWind,
  FaTint
} from 'react-icons/fa';
import { getWeatherIcon } from '../utils/weatherUtils';

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden weather-card">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{weather.city}</h2>
            <p className="text-gray-600 text-lg">{new Date().toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center gap-4">
              {getWeatherIcon(weather.condition, 'text-6xl')}
              <div>
                <p className="text-5xl font-bold text-gray-800">{Math.round(weather.temperature)}°C</p>
                <p className="text-gray-600 text-lg capitalize">{weather.condition}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaTemperatureHigh className="text-blue-600 text-xl" />
              <h3 className="font-bold text-gray-800">Ressenti</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">{Math.round(weather.feelsLike)}°C</p>
            <p className="text-gray-600 text-sm mt-1">Température ressentie</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaTint className="text-green-600 text-xl" />
              <h3 className="font-bold text-gray-800">Humidité</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">{weather.humidity}%</p>
            <p className="text-gray-600 text-sm mt-1">Taux d'humidité dans l'air</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaWind className="text-purple-600 text-xl" />
              <h3 className="font-bold text-gray-800">Vent</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">{weather.windSpeed} km/h</p>
            <p className="text-gray-600 text-sm mt-1">Vitesse du vent</p>
          </div>
        </div>

        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200">
          <h3 className="font-bold text-xl text-amber-800 mb-3">Note canine du jour</h3>
          <p className="text-gray-700">{weather.dogAdvice}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;