import "./AnswerOption.css";

/**
 * A single selectable answer option.
 * Reusable and presentational: it renders the label and reports clicks upward.
 *
 * Props:
 *   label      {string}   option text
 *   selected   {boolean}  whether this option is the chosen one
 *   onSelect   {function} called when the user picks this option
 */
function AnswerOption({ label, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`answer-option${selected ? " answer-option--selected" : ""}`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      {label}
    </button>
  );
}

export default AnswerOption;
