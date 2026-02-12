export default function ForecastCard({ forecast }) {
  if (!forecast) return <div>No forecast data</div>;

  return (
    <div className="forecast-section">
      <h2 className="section-title">📅 5-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-day">{day.day}</div>
            <div className="forecast-icon">{day.icon}</div>
            <div className="forecast-temp">
              {day.high}° / {day.low}°
            </div>
            <div className="forecast-condition">{day.condition}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
