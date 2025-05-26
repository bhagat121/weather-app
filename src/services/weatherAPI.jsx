const API_KEY = 'b196726aba8ff934e22fdcc705d44d5a'

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
