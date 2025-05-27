import React from "react";
import styles from "../styles/forecastCard.module.css";

const ForecastCard = ({ forecast }) => {
  return (
    <div className={styles.card}>
      <h3>{forecast.date}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
        alt={forecast.description}
      />
      <p>{forecast.temp}°</p>
      <p>{forecast.description}</p>
    </div>
  );
};

export default ForecastCard;
