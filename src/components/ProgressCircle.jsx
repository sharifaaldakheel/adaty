import "./ProgressCircle.css";

/**
 * Circular progress indicator.
 * Shows the current question number over the total (e.g. "4/10")
 * with an arc that fills proportionally, matching the approved design.
 *
 * Props:
 *   current {number} 1-based index of the current question
 *   total   {number} total number of questions
 */
function ProgressCircle({ current, total }) {
  const size = 56; // px, outer diameter
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Guard against division by zero and clamp the ratio to [0, 1].
  const ratio = total > 0 ? Math.min(Math.max(current / total, 0), 1) : 0;
  const dashOffset = circumference * (1 - ratio);
  const center = size / 2;

  return (
    <div
      className="progress-circle"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`السؤال ${current} من ${total}`}
    >
      <svg width={size} height={size} className="progress-circle__svg">
        {/* Track (full ring) */}
        <circle
          className="progress-circle__track"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress arc */}
        <circle
          className="progress-circle__bar"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          // Start the arc from the top of the circle.
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      <span className="progress-circle__label">
        {current}/{total}
      </span>
    </div>
  );
}

export default ProgressCircle;
