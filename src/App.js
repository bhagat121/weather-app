import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import styles from './styles/global.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>🌦️ Weather Dashboard</h1>
      <SearchBar />
      <ErrorMessage />
      <WeatherCard />
    </div>
  );
}

export default App;
