import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/error.module.css";

const ErrorMessage = () => {
  const { error } = useContext(WeatherContext);
  if (!error) return null;

  return <div className={styles.error}>{error}</div>;
};

export default ErrorMessage;
