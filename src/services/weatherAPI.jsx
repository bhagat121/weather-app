const API_KEY = "Please add ypu api key";

export const fetchWeather = async (city, unit = "metric") => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  const data = await res.json();
  if (!res.ok) throw new Error("Error fetching forecast");

  // Filter 1 reading per day
  const filtered = data.list
    .filter((_, index) => index % 8 === 0)
    .slice(0, 6)
    .map((day) => ({
      date: new Date(day.dt_txt).toLocaleDateString(),
      temp: Math.round(day.main.temp),
      icon: day.weather[0].icon,
      description: day.weather[0].main,
    }));

    console.log(filtered);
    

  return filtered;
};
