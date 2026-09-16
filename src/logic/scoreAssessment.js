// Pure scoring logic for the AI Knowledge Assessment.
// No React, no side effects, no I/O — given the same inputs it always
// returns the same result and never mutates its arguments.

/**
 * @typedef {Object} AreaScore
 * @property {number} correct    number of correct answers in the area
 * @property {number} total      number of questions in the area
 * @property {number} percentage 0-100, rounded to the nearest integer
 */

/**
 * @typedef {Object} AssessmentResult
 * @property {{correct: number, total: number, percentage: number}} overall
 * @property {Object.<string, AreaScore>} areas   keyed by area name
 * @property {string[]} strengths areas answered fully correctly (all correct)
 * @property {string[]} gaps      areas with at most one correct answer
 */

/**
 * Safely resolve the option the user selected for a given question.
 * Works whether `answers` is a map keyed by question id ({ 1: 0, 2: 3 })
 * or a sparse array indexed by question id ([, 0, 3]); both support lookup
 * by id. Returns undefined when there is no answer for that question.
 *
 * @param {Object|Array|null|undefined} answers
 * @param {number|string} questionId
 * @returns {number|undefined}
 */
function getSelectedOption(answers, questionId) {
  if (answers === null || answers === undefined) return undefined;
  return answers[questionId];
}

/**
 * Score a completed (or partially completed) assessment.
 *
 * @param {Object|Array} answers   selected option index keyed by question id
 * @param {Array<Object>} questions the question bank (each with id, area,
 *                                  options, correctAnswer)
 * @returns {AssessmentResult}
 */
function scoreAssessment(answers, questions) {
  // Defensive default so a missing/invalid question list never crashes.
  const questionList = Array.isArray(questions) ? questions : [];

  // Accumulate per-area tallies. Area keys are discovered from the question
  // bank itself (never hardcoded), preserving first-seen order.
  /** @type {Object.<string, {correct: number, total: number}>} */
  const areaTallies = {};
  let overallCorrect = 0;

  for (const question of questionList) {
    // Skip malformed entries rather than throwing.
    if (!question || question.area === undefined || question.area === null) {
      continue;
    }

    const area = question.area;
    if (!areaTallies[area]) {
      areaTallies[area] = { correct: 0, total: 0 };
    }
    areaTallies[area].total += 1;

    const selected = getSelectedOption(answers, question.id);
    // An unanswered question (undefined) simply counts as not correct.
    const isCorrect =
      selected !== undefined && selected === question.correctAnswer;

    if (isCorrect) {
      areaTallies[area].correct += 1;
      overallCorrect += 1;
    }
  }

  // Build the per-area result with percentages.
  /** @type {Object.<string, AreaScore>} */
  const areas = {};
  const strengths = [];
  const gaps = [];

  for (const area of Object.keys(areaTallies)) {
    const { correct, total } = areaTallies[area];
    areas[area] = {
      correct,
      total,
      percentage: toPercentage(correct, total),
    };

    // Strength: every question in the area answered correctly (e.g. 3/3).
    if (total > 0 && correct === total) {
      strengths.push(area);
    }
    // Gap: at most one correct answer in the area (e.g. 0/3 or 1/3).
    if (correct <= 1) {
      gaps.push(area);
    }
  }

  const overallTotal = questionList.reduce(
    (count, q) => (q && q.area !== undefined && q.area !== null ? count + 1 : count),
    0
  );

  return {
    overall: {
      correct: overallCorrect,
      total: overallTotal,
      percentage: toPercentage(overallCorrect, overallTotal),
    },
    areas,
    strengths,
    gaps,
  };
}

/**
 * Convert a correct/total pair into a 0-100 integer percentage.
 * Returns 0 when there are no questions (avoids NaN).
 *
 * @param {number} correct
 * @param {number} total
 * @returns {number}
 */
function toPercentage(correct, total) {
  if (!total || total <= 0) return 0;
  return Math.round((correct / total) * 100);
}

export default scoreAssessment;
export { scoreAssessment };
