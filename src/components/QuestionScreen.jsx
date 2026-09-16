import { useState } from "react";
import questions from "../data/questions.js";
import AppHeader from "./AppHeader.jsx";
import RingDecoration from "./RingDecoration.jsx";
import ProgressCircle from "./ProgressCircle.jsx";
import AnswerOption from "./AnswerOption.jsx";
import "./QuestionScreen.css";

/**
 * Question Screen for the AI Knowledge Assessment.
 *
 * Displays one question at a time with four options, tracks the user's
 * selection, and advances through the local question bank. Scoring itself
 * lives in the scoring logic; this screen only collects answers and, after
 * the final question, hands them off via `onFinish`.
 *
 * Props:
 *   t          {object}   translations for the current language
 *   lang       {string}   current language key ("ar" | "en")
 *   headerProps{object}   props forwarded to AppHeader
 *   onFinish   {function} called with the answers map when the last question
 *                         is submitted (answers keyed by question id).
 */
function QuestionScreen({ t, lang, headerProps, onFinish }) {
  // Index of the question currently on screen.
  const [currentIndex, setCurrentIndex] = useState(0);
  // Recorded answers, keyed by question id -> selected option index.
  const [answers, setAnswers] = useState({});

  const total = questions.length;
  const currentQuestion = questions[currentIndex];

  // The selection for the question in view (undefined if not yet answered).
  const selectedOption = answers[currentQuestion.id];
  const hasSelection = selectedOption !== undefined;
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === total - 1;

  // Record the chosen option for the current question.
  const handleSelect = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  // Go back to the previous question. The previous answer stays selected
  // because answers are kept in state, keyed by question id.
  const handleBack = () => {
    if (isFirstQuestion) return;
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  // Advance to the next question, or finish the assessment on the last one.
  // Blocked until an option is chosen.
  const handleNext = () => {
    if (!hasSelection) return;
    if (isLastQuestion) {
      onFinish(answers);
      return;
    }
    setCurrentIndex((index) => Math.min(index + 1, total - 1));
  };

  return (
    <div className="question-screen">
      <AppHeader {...headerProps} />
      <RingDecoration />

      <main className="question-card">
        {/* Top row: progress on the start corner, back on the opposite one. */}
        <div className="question-card__top">
          <ProgressCircle current={currentIndex + 1} total={total} />
          <button
            type="button"
            className="question-card__back"
            onClick={handleBack}
            disabled={isFirstQuestion}
            aria-label={t.question.back}
          >
            {/* Chevron, flipped horizontally to point the other way. */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <h1 className="question-card__text">
          {currentQuestion.question[lang]}
        </h1>

        <div className="question-card__options">
          {currentQuestion.options[lang].map((option, index) => (
            <AnswerOption
              key={`${currentQuestion.id}-${index}`}
              label={option}
              selected={selectedOption === index}
              onSelect={() => handleSelect(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="question-card__next"
          onClick={handleNext}
          disabled={!hasSelection}
        >
          {isLastQuestion ? t.question.showResult : t.question.next}
        </button>
      </main>
    </div>
  );
}

export default QuestionScreen;
