import "./styles/App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import ForecastCard from "./components/ForecastCard";
import { useState } from "react";
import { getWeatherData } from "./utils/weatherApi";

function App() {
  // Hardcoded weather data (for now)
  const [weather, setWeather] = useState({
    name: "Delhi",
    main: {
      temp: 28,
      feels_like: 26,
      humidity: 65,
      pressure: 1013,
    },
    weather: [
      {
        main: "Partly Cloudy",
        description: "partly cloudy sky",
      },
    ],
    wind: {
      speed: 12,
    },
    visibility: 10000,
    sys: {
      sunrise: 1704067200,
      sunset: 1704105600,
    },
  });

  // Hardcoded forecast data
  const [forecast, setForecast] = useState([
    {
      day: "Today",
      icon: "☁️",
      high: 28,
      low: 22,
      condition: "Partly Cloudy",
    },
    {
      day: "Tomorrow",
      icon: "☁️",
      high: 25,
      low: 20,
      condition: "Cloudy",
    },
    {
      day: "Thursday",
      icon: "🌧️",
      high: 22,
      low: 18,
      condition: "Rainy",
    },
    {
      day: "Friday",
      icon: "🌧️",
      high: 23,
      low: 19,
      condition: "Rainy",
    },
    {
      day: "Saturday",
      icon: "☀️",
      high: 29,
      low: 24,
      condition: "Sunny",
    },
  ]);

  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    try{
      const data = await getWeatherData(city)
      setWeather(data);
      localStorage.setItem("lastCity", city);
    }catch(error){
      setError(error.message)
    }finally{
      setLoading(false)
    }
    
  };

  return (
    <div className="App">
      <Header />

      <div className="container">
        <SearchBar onSearch={handleSearch} />

        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && weather && (
          <>
            <CurrentWeather weather={weather} />
            <WeatherDetails weather={weather} />
            <ForecastCard forecast={forecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
