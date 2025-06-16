import React, { createContext, useState, useEffect } from "react";
import { fetchWeather } from "../services/weatherAPI";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "Delhi");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("metric");

  const loadWeather = async (cityName = city) => {
    try {
      const data = await fetchWeather(cityName);
      setCity(cityName); // this will make sure city stays updated
      setWeather(data);
      setError(null);
      localStorage.setItem("lastCity", cityName); // so it persists after reload
    } catch (err) {
      setError("Could not fetch weather. Please check the city name.");
      setWeather(null);
    }
  };

  useEffect(() => {
    loadWeather(city);
    const interval = setInterval(() => loadWeather(city), 30000);
    return () => clearInterval(interval);
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{ city, setCity, weather, loadWeather, error, unit, setUnit }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
