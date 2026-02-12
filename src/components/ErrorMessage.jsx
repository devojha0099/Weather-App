export default function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <div className="error-icon">⚠️</div>
      <p className="error-text">{message || "An error occurred"}</p>
      <button className="retry-btn">Try Again</button>
    </div>
  );
}
