// src/utils/dogAdviceUtils.js
export const getDogReaction = (dayForecast) => {
  const temp = dayForecast.temperature;
  const condition = dayForecast.condition.toLowerCase();
  
  if (temp > 30 || temp < -5 || condition.includes('orage')) {
    return { text: "Pas idéal", color: "bg-red-100 text-red-800", icon: "❌" };
  } else if (temp > 25 || temp < 0 || condition.includes('pluie forte')) {
    return { text: "Avec précaution", color: "bg-yellow-100 text-yellow-800", icon: "⚠️" };
  } else {
    return { text: "Parfait !", color: "bg-green-100 text-green-800", icon: "✅" };
  }
};

export const generateDogAdvice = (weather) => {
  const temp = weather.temperature;
  const condition = weather.condition.toLowerCase();
  const windSpeed = weather.windSpeed;
  
  let canGoOut = true;
  let advice = '';
  
  if (temp > 30) {
    canGoOut = false;
    advice = 'Trop chaud pour votre chien! Risque de coup de chaleur. Attendez le soir pour sortir.';
  } else if (temp < -5) {
    canGoOut = false;
    advice = 'Trop froid pour une sortie prolongée. Limitez la promenade à quelques minutes.';
  } else if (condition.includes('orage')) {
    canGoOut = false;
    advice = 'Orages prévus. Mieux vaut rester à l\'intérieur avec votre chien.';
  } else if (condition.includes('pluie forte')) {
    advice = 'Pluie forte prévue. Si nécessaire, sortez brièvement avec un imperméable.';
  } else if (temp > 25) {
    advice = 'Il fait chaud. Sortez tôt le matin ou en fin de journée pour éviter les heures les plus chaudes.';
  } else if (temp < 5) {
    advice = 'Il fait frais. Une petite veste pour votre chien pourrait être appréciée.';
  } else {
    advice = 'Conditions idéales pour une promenade avec votre chien!';
  }
  
  if (windSpeed > 30) {
    advice += ' Vent fort, gardez votre chien en laisse.';
  }
  
  return { canGoOut, advice };
};