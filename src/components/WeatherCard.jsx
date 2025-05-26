import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/weatherCard.module.css";

const WeatherCard = () => {
  const { weather } = useContext(WeatherContext);

  if (!weather) return null;

  const { name, main, weather: weatherDetails, wind } = weather;
  const icon = weatherDetails[0].icon;

  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={weatherDetails[0].description}
      />
      <p>
        <strong>Temperature:</strong> {main.temp}°C
      </p>
      <p>
        <strong>Humidity:</strong> {main.humidity}%
      </p>
      <p>
        <strong>Wind Speed:</strong> {wind.speed} m/s
      </p>
      <p>
        <strong>Condition:</strong> {weatherDetails[0].main}
      </p>
    </div>
  );
};

export default WeatherCard;
