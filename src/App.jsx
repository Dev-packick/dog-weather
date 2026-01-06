import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Forecast from './components/Forecast'

// Les icônes principales
const ICONES_METEO = {
  "01d": "/icons/sunny.svg", "01n": "/icons/night.svg",
  "02d": "/icons/day.svg", "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg", "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg", "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg", "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg", "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg", "11n": "/icons/storm.svg",
};

// Les icônes de détails
const ICONES_INFOS = {
  humidite: "/icons/humidity.svg",
  vent: "/icons/wind.svg",
  pression: "/icons/pressure.svg",
  soleil: "/icons/temp.svg",
};

function App() {
  const [villeTapee, setVilleTapee] = useState("")
  const [donnees, setDonnees] = useState(null)
  const genererConseilChien = (temp) => {
    if (temp > 25) return "☀️ Attention au bitume chaud !";
    if (temp < 5) return "❄️ Sortez le manteau pour toutou.";
    return "🦴 Temps idéal pour une balade !";
  }

  const chercherMeteo = async (evenement) => {
    evenement.preventDefault()
    const cle = "fe4feefa8543e06d4f3c66d92c61b69c"
    try {
      // Météo actuelle
      const reponseMeteo = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${villeTapee}&units=metric&appid=${cle}&lang=fr`)
      // Prévisions
      const reponsePrev = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${villeTapee}&units=metric&appid=${cle}&lang=fr`)
      
      setDonnees({
        actuelle: reponseMeteo.data,
        previsions: reponsePrev.data.list.filter((item, index) => index % 8 === 0).slice(0, 3)
      })
    } catch (erreur) { alert("Ville introuvable !") }
  }

  return (
    <div className="container-app">
      <h1 className="titre">Dog Weather 🐾</h1>

      <form onSubmit={chercherMeteo} className="recherche-box">
        <input placeholder="Ville..." onChange={(e) => setVilleTapee(e.target.value)} />
        <button type="submit">Vérifier</button>
      </form>

      {donnees && (
        <div className="carte">
          <div className="meteo-principale">
            <div>
              <span className="temp-grosse">{Math.round(donnees.actuelle.main.temp)}°C</span>
              <p className="description">{donnees.actuelle.weather[0].description}</p>
            </div>
            <img className="image-meteo" src={ICONES_METEO[donnees.actuelle.weather[0].icon]} alt="icon" />
          </div>

          <h2 className="ville-nom">{donnees.actuelle.name}, {donnees.actuelle.sys.country}</h2>

          <div className="conseil-cadre">{genererConseilChien(donnees.actuelle.main.temp)}</div>

          <div className="infos-grille">
            <div className="info-item">
              <img src={ICONES_INFOS.humidite} alt="" />
              <span>{donnees.actuelle.main.humidity}% <br/> <b>Humidité</b></span>
            </div>
            <div className="info-item">
              <img src={ICONES_INFOS.vent} alt="" />
              <span>{donnees.actuelle.wind.speed} km/h <br/> <b>Vent</b></span>
            </div>
          </div>

          <Forecast previsions={donnees.previsions} />
        </div>
      )}
    </div>
  )
}

export default App