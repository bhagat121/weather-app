import React, { createContext, useState, useEffect } from "react";
import { fetchWeather } from "../services/weatherAPI";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "Delhi");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const loadWeather = async (cityName = city) => {
    try {
      const data = await fetchWeather(cityName);
      setWeather(data);
      setError(null);
      localStorage.setItem("lastCity", cityName);
    } catch (err) {
      setError("Could not fetch weather. Please check the city name.");
      setWeather(null);
    }
  };

  useEffect(() => {
    loadWeather();
    const interval = setInterval(() => loadWeather(), 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherContext.Provider
      value={{ city, setCity, weather, loadWeather, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
