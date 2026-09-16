import AppHeader from "./AppHeader.jsx";
import AreaGauge from "./AreaGauge.jsx";
import "./ResultScreen.css";

/**
 * Result Screen for the AI Knowledge Assessment.
 *
 * Renders the output of `scoreAssessment`:
 *   - one circular gauge per area (percentage)
 *   - one suggestion card per gap area
 *   - a "start over" button that resets the assessment
 *
 * Props:
 *   t          {object}   translations for the current language
 *   headerProps{object}   props forwarded to AppHeader
 *   result     {object}   the object returned by scoreAssessment
 *   onRestart  {function} called to reset state and return to question 1
 */
function ResultScreen({ t, headerProps, result, onRestart }) {
  // Areas come straight from the scoring result (keys discovered from data).
  const areaEntries = Object.entries(result.areas);
  const gaps = result.gaps;

  // Localized helpers with a fallback to the raw key.
  const areaLabel = (area) => t.areas[area] || area;
  const areaRecommendation = (area) => t.recommendations[area] || "";

  return (
    <div className="result-screen">
      <AppHeader {...headerProps} />

      {/* Decorative concentric rings behind the card. */}
      <div className="result-screen__decoration" aria-hidden="true">
        <span className="result-ring result-ring--1" />
        <span className="result-ring result-ring--2" />
      </div>

      <main className="result-card">
        {/* Gauges panel — sits on the start side (first child). */}
        <section className="result-card__gauges" aria-label={t.result.gaugesAria}>
          {areaEntries.map(([area, score]) => (
            <AreaGauge
              key={area}
              label={areaLabel(area)}
              percentage={score.percentage}
              suffix={t.result.percent}
            />
          ))}
        </section>

        {/* Suggestions column — cards for gap areas, then the reset button. */}
        <section className="result-card__side">
          <div className="result-card__cards">
            {gaps.length > 0 ? (
              gaps.map((area) => (
                <article key={area} className="suggestion-card">
                  <h3 className="suggestion-card__title">{areaLabel(area)}</h3>
                  <p className="suggestion-card__text">
                    {areaRecommendation(area)}
                  </p>
                </article>
              ))
            ) : (
              // No gaps: give positive feedback instead of an empty column.
              <article className="suggestion-card">
                <h3 className="suggestion-card__title">
                  {t.result.excellentTitle}
                </h3>
                <p className="suggestion-card__text">
                  {t.result.excellentText}
                </p>
              </article>
            )}
          </div>

          <button
            type="button"
            className="result-card__restart"
            onClick={onRestart}
          >
            {t.result.restart}
          </button>
        </section>
      </main>
    </div>
  );
}

export default ResultScreen;
