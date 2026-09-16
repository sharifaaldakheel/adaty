import { useEffect, useState } from "react";
import LandingScreen from "./components/LandingScreen.jsx";
import QuestionScreen from "./components/QuestionScreen.jsx";
import ResultScreen from "./components/ResultScreen.jsx";
import questions from "./data/questions.js";
import scoreAssessment from "./logic/scoreAssessment.js";
import translations from "./data/translations.js";

// Top-level flow: landing -> quiz -> result. The landing is the entry view.
// Language state lives here; there is no i18n library, just a plain object of
// translations selected by the current language.
function App() {
  // Which screen is showing. The app opens on the landing screen.
  const [view, setView] = useState("landing");
  // Current language; Arabic by default.
  const [lang, setLang] = useState("ar");
  // The scored result, computed once when the quiz finishes.
  const [result, setResult] = useState(null);
  // Bumped to remount QuestionScreen and reset it to question 1.
  const [runId, setRunId] = useState(0);

  // Strings for the current language, and the matching text direction.
  const t = translations[lang];
  const dir = t.dir;

  // Apply direction and language to the document root whenever they change.
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  // Toggle between Arabic and English.
  const toggleLanguage = () => {
    setLang((current) => (current === "ar" ? "en" : "ar"));
  };

  // Landing -> quiz.
  const handleStart = () => {
    setRunId((id) => id + 1);
    setView("quiz");
  };

  // Called by QuestionScreen after the final question is submitted.
  const handleFinish = (answers) => {
    setResult(scoreAssessment(answers, questions));
    setView("result");
  };

  // Reset everything and return to a fresh question 1.
  const handleRestart = () => {
    setResult(null);
    setRunId((id) => id + 1);
    setView("quiz");
  };

  // Props shared by every screen's header (language toggle + about modal).
  const headerProps = { t, lang, onToggleLanguage: toggleLanguage };

  if (view === "landing") {
    return <LandingScreen t={t} headerProps={headerProps} onStart={handleStart} />;
  }

  if (view === "result" && result) {
    return (
      <ResultScreen
        t={t}
        headerProps={headerProps}
        result={result}
        onRestart={handleRestart}
      />
    );
  }

  // `key` forces a fresh QuestionScreen (index + answers reset).
  return (
    <QuestionScreen
      key={runId}
      t={t}
      lang={lang}
      headerProps={headerProps}
      onFinish={handleFinish}
    />
  );
}

export default App;
