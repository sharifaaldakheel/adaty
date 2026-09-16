import "./AreaGauge.css";

/**
 * Map a percentage to a performance band. The band drives the arc color so a
 * viewer can read performance from color alone (high=green ... zero=red).
 *
 * @param {number} percentage 0-100
 * @returns {"high"|"mid"|"low"|"zero"}
 */
function scoreBand(percentage) {
  if (percentage >= 80) return "high";
  if (percentage >= 50) return "mid";
  if (percentage >= 20) return "low";
  return "zero";
}

/**
 * Circular gauge for a single assessment area.
 * The arc length encodes the area's percentage; the area name sits in the
 * center with the percentage below it, matching the approved result design.
 *
 * Props:
 *   label      {string} area name shown in the center
 *   percentage {number} 0-100
 *   suffix     {string} percent sign for the current language (e.g. "%" / "٪")
 */
function AreaGauge({ label, percentage, suffix = "%" }) {
  const size = 150; // px, outer diameter
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  // Clamp to [0, 100] so a stray value can never distort the arc.
  const safePercentage = Math.min(Math.max(percentage, 0), 100);
  const dashOffset = circumference * (1 - safePercentage / 100);
  const band = scoreBand(safePercentage);

  return (
    <div
      className="area-gauge"
      role="img"
      aria-label={`${label}: ${safePercentage}${suffix}`}
    >
      <svg width={size} height={size} className="area-gauge__svg">
        {/* Track (full ring) */}
        <circle
          className="area-gauge__track"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress arc, starting from the top */}
        <circle
          className={`area-gauge__bar area-gauge__bar--${band}`}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      <div className="area-gauge__center">
        <span className="area-gauge__label">{label}</span>
        <span className="area-gauge__value">
          {safePercentage}
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default AreaGauge;
