import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/search.module.css";

const SearchBar = () => {
  const { loadWeather } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      loadWeather(input.trim());
      setInput("");
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
