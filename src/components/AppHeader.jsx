import { useState } from "react";
import InfoModal from "./InfoModal.jsx";
import logo from "../assets/logo.png";
import "./AppHeader.css";

/**
 * Top chrome: info + language-toggle buttons on one side, logo on the other.
 * Each screen renders its own AppHeader; the about-modal state is local here.
 *
 * Props:
 *   t                {object}   translations for the current language
 *   onToggleLanguage {function} switches the language
 */
function AppHeader({ t, onToggleLanguage }) {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <header className="app-header">
        <div className="app-header__actions">
          {/* Info icon — opens the about modal. */}
          <button
            type="button"
            className="app-header__icon-btn"
            onClick={() => setInfoOpen(true)}
            aria-label={t.header.info}
          >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="7.5" r="1.4" fill="currentColor" />
              <path
                d="M12 11v6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Globe icon — toggles the language. */}
          <button
            type="button"
            className="app-header__icon-btn"
            onClick={onToggleLanguage}
            aria-label={t.header.toggleLanguage}
          >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* Logo (same position and size as the previous placeholder square). */}
        <img className="app-header__mark" src={logo} alt="شعار الأداة" />
      </header>

      <InfoModal
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        title={t.info.title}
        text={t.info.text}
        closeLabel={t.info.close}
      />
    </>
  );
}

export default AppHeader;
