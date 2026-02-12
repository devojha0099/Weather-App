export default function WeatherDetails({ weather }) {
  if (!weather) return <div>No data</div>;

  const convertUnixToTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="weather-details">
      <h2 className="details-title">Weather Details</h2>
      <div className="details-grid">
        <div className="detail-item">
          <div className="detail-icon">💧</div>
          <div className="detail-label">Humidity</div>
          <div className="detail-value">{weather.main.humidity}%</div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">💨</div>
          <div className="detail-label">Wind Speed</div>
          <div className="detail-value">{weather.wind.speed} km/h</div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">⇅</div>
          <div className="detail-label">Pressure</div>
          <div className="detail-value">{weather.main.pressure} hPa</div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">👁️</div>
          <div className="detail-label">Visibility</div>
          <div className="detail-value">
            {(weather.visibility / 1000).toFixed(1)} km
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">☀️</div>
          <div className="detail-label">UV Index</div>
          <div className="detail-value">6 (High)</div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">🌙</div>
          <div className="detail-label">Sunset</div>
          <div className="detail-value">
            {convertUnixToTime(weather.sys.sunset)}
          </div>
        </div>
      </div>
    </div>
  );
}
