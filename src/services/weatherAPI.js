import axios from "axios";

const CLE_API = "fe4feefa8543e06d4f3c66d92c61b69c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Cette fonction va chercher la météo actuelle ET les prévisions
export const recupererToutelLaMeteo = async (nomDeLaVille) => {
  try {
    // 1. On récupère la météo du moment
    const reponseActuelle = await axios.get(
      `${BASE_URL}/weather?q=${nomDeLaVille}&units=metric&appid=${CLE_API}&lang=fr`
    );

    // 2. On récupère les prévisions (pour les 3 jours plus tard)
    const reponsePrevisions = await axios.get(
      `${BASE_URL}/forecast?q=${nomDeLaVille}&units=metric&appid=${CLE_API}&lang=fr`
    );

    // On renvoie un objet propre avec les deux résultats
    return {
      actuelle: reponseActuelle.data,
      previsions: reponsePrevisions.data.list.filter((item, index) => index % 8 === 0).slice(0, 3)
    };
  } catch (erreur) {
    throw erreur; // On renvoie l'erreur pour la gérer dans App.jsx
  }
};