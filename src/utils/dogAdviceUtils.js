// src/utils/weatherUtils.js
import { 
  FaSun, 
  FaCloudSun, 
  FaCloud, 
  FaCloudRain, 
  FaSnowflake, 
  FaBolt, 
  FaSmog 
} from 'react-icons/fa';

export const getWeatherIcon = (condition, sizeClass = 'text-6xl') => {
  const cond = condition.toLowerCase();
  
  if (cond.includes('ensoleillé') || cond.includes('clair')) {
    return <FaSun className={`text-yellow-500 ${sizeClass}`} />;
  } else if (cond.includes('partiellement nuageux')) {
    return <FaCloudSun className={`text-gray-500 ${sizeClass}`} />;
  } else if (cond.includes('nuageux') || cond.includes('couvert')) {
    return <FaCloud className={`text-gray-400 ${sizeClass}`} />;
  } else if (cond.includes('pluie') || cond.includes('pluvieux')) {
    return <FaCloudRain className={`text-blue-500 ${sizeClass}`} />;
  } else if (cond.includes('neige') || cond.includes('neigeux')) {
    return <FaSnowflake className={`text-blue-300 ${sizeClass}`} />;
  } else if (cond.includes('orage') || cond.includes('orageux')) {
    return <FaBolt className={`text-yellow-600 ${sizeClass}`} />;
  } else if (cond.includes('brouillard') || cond.includes('brumeux')) {
    return <FaSmog className={`text-gray-300 ${sizeClass}`} />;
  } else {
    return <FaSun className={`text-yellow-500 ${sizeClass}`} />;
  }
};

export const getWeatherBackground = (weather) => {
  if (!weather) return 'bg-gradient-to-br from-blue-100 to-blue-300';
  
  const condition = weather.condition.toLowerCase();
  const temp = weather.temperature;
  
  if (condition.includes('pluie') || condition.includes('pluvieux')) {
    return 'bg-gradient-to-br from-gray-300 to-blue-400';
  } else if (condition.includes('neige') || condition.includes('neigeux')) {
    return 'bg-gradient-to-br from-blue-100 to-blue-200';
  } else if (condition.includes('nuageux') || condition.includes('couvert')) {
    return 'bg-gradient-to-br from-gray-200 to-gray-400';
  } else if (temp > 30) {
    return 'bg-gradient-to-br from-orange-300 to-red-400';
  } else if (temp > 20) {
    return 'bg-gradient-to-br from-yellow-200 to-orange-300';
  } else {
    return 'bg-gradient-to-br from-blue-100 to-blue-300';
  }
};