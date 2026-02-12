export default function CurrentWeather({ weather }) {
  if (!weather) return <div>No weather data</div>;

  const getWeatherIcon = (condition) => {
    const text = condition.toLowerCase();

    if (text.includes("cloud")) return "☁️";
    if (text.includes("rain")) return "🌧️";
    if (text.includes("sun") || text.includes("clear")) return "☀️";
    if (text.includes("snow")) return "❄️";
    if (text.includes("thunder")) return "⛈️";
    return "🌤️";
  };

  return (
    <div className="current-weather">
      <div className="weather-icon">
        {getWeatherIcon(weather.weather[0].main)}
      </div>
      <div className="temperature">{Math.round(weather.main.temp)}°C</div>
      <div className="weather-condition">{weather.weather[0].main}</div>
      <div className="location">📍 {weather.name}, India</div>
      <div className="feels-like">
        <i className="fas fa-thermometer-half"></i>
        Feels like {Math.round(weather.main.feels_like)}°C
      </div>
    </div>
  );
}
