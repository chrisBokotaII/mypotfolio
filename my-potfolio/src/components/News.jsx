import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=kampala,ug&appid=95ba4f49d03f1613f69c0b422ae77717"
    )
      .then((res) => res.json())
      .then((data) => setWeather(() => data.list.slice(1, 5)));
  }, []);
  console.log(weather);
  return (
    <div className="weather">
      {weather.map((item, index) => (
        <div className="weather-item" key={index}>
          <h1>{item.dt_txt}</h1>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt=""
          />
          <span>
            {Math.round(item.main.temp - 273.15).toFixed(2) + " " + "°C"}
          </span>
          <p>{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}
