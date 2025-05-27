import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/weatherCard.module.css";

const WeatherCard = () => {
  const { weather } = useContext(WeatherContext);

  if (!weather || !weather.weather || !weather.weather[0]) return null;

  const { name, main, wind } = weather;
  const icon = weather.weather[0].icon;
  const description = weather.weather[0].main;

  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>
        <strong>Temp:</strong> {main.temp}°
      </p>
      <p>
        <strong>Humidity:</strong> {main.humidity}%
      </p>
      <p>
        <strong>Wind:</strong> {wind.speed} m/s
      </p>
      <p>
        <strong>Condition:</strong> {description}
      </p>
    </div>
  );
};

export default WeatherCard;
