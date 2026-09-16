import AppHeader from "./AppHeader.jsx";
import RingDecoration from "./RingDecoration.jsx";
import robot from "../assets/robot.png";
import "./LandingScreen.css";

/**
 * Landing Screen — the app's entry view.
 *
 * Shows the mascot, the assessment title, a short description, and a start
 * button. The question screen is only reachable by pressing start.
 *
 * Props:
 *   t          {object}   translations for the current language
 *   headerProps{object}   props forwarded to AppHeader (t + language toggle)
 *   onStart    {function} called when the user presses the start button.
 */
function LandingScreen({ t, headerProps, onStart }) {
  return (
    <div className="landing">
      <AppHeader {...headerProps} />
      <RingDecoration />

      <div className="landing__content">
        {/* Mascot sits above and overlaps the top of the card. */}
        <img className="landing__robot" src={robot} alt={t.landing.robotAlt} />

        <main className="landing__card">
          <h1 className="landing__title">{t.landing.title}</h1>
          <p className="landing__desc">{t.landing.desc}</p>

          <div className="landing__cta">
            <button
              type="button"
              className="landing__start"
              onClick={onStart}
            >
              {t.landing.start}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingScreen;
