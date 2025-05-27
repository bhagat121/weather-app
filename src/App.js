import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import styles from "./styles/global.module.css";
import UnitToggle from "./components/UnitToggle";
import ForecastSection from "./components/ForecastSection";

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>🌦️ Weather Dashboard</h1>
      <SearchBar />
      <ErrorMessage />
      <WeatherCard />
      <UnitToggle />
      <ForecastSection />
    </div>
  );
}

export default App;
