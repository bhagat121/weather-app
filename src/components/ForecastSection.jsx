import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../services/weatherAPI";
import { WeatherContext } from "../context/WeatherContext";
import ForecastCard from "./ForecastCard";
import styles from "../styles/forecastSection.module.css";

const ForecastSection = () => {
  const { city, unit } = useContext(WeatherContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["forecast", city, unit],
    queryFn: () => fetchWeather(city, unit),
    enabled: !!city,
    staleTime: 1000 * 60, // 1 min cache
  });

  if (isLoading) return <p>Loading forecast for {city}...</p>;
  if (isError) return <p>Error loading forecast for {city}</p>;

  return (
    <div className={styles.container}>
      <h2>5-Day Forecast for {city}</h2>

      <div className={styles.grid}>
        {data.slice(0, 3).map((item, idx) => (
          <ForecastCard key={idx} forecast={item} />
        ))}
      </div>
      <div className={styles.grid}>
        {data.slice(3, 6).map((item, idx) => (
          <ForecastCard key={idx + 3} forecast={item} />
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;
