import React from 'react';

function Forecast({ previsions }) {
    return (
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {previsions.map((jour, index) => (
        <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px", width: "30%" }}>
          {/* On transforme la date en nom de jour (ex: Lun.) */}
            <p style={{ fontWeight: "bold" }}> {new Date(jour.dt_txt).toLocaleDateString('fr-FR', { weekday: 'short' })}</p>
            <img src={`https://openweathermap.org/img/wn/${jour.weather[0].icon}.png`} alt="icone météo"/>
            <p>{Math.round(jour.main.temp)}°C</p>
        </div>
        ))}
    </div>
    );
}

export default Forecast;