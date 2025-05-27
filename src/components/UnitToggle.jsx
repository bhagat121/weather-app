import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/toggle.module.css";

const UnitToggle = () => {
  const { unit, setUnit } = useContext(WeatherContext);

  return (
    <div className={styles.toggle}>
      <button
        className={unit === "metric" ? styles.active : ""}
        onClick={() => setUnit("metric")}
      >
        °C
      </button>
      <button
        className={unit === "imperial" ? styles.active : ""}
        onClick={() => setUnit("imperial")}
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;
