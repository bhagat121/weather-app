const API_KEY = 'PLease add you weather api key here'

export const fetchWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) {
    throw new Error("City not found");
  }
  const data = await res.json();
  return data;
};
