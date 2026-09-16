import { useEffect } from "react";
import "./InfoModal.css";

/**
 * Small "about the tool" modal.
 * Closes on backdrop click, on the close button, and on the Escape key.
 *
 * Props:
 *   open       {boolean}  whether the modal is visible
 *   onClose    {function} called to request closing
 *   title      {string}   modal heading
 *   text       {string}   modal body
 *   closeLabel {string}   accessible label for the close button
 */
function InfoModal({ open, onClose, title, text, closeLabel }) {
  // Close on Escape while the modal is open.
  useEffect(() => {
    if (!open) return;
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    // Clicking the backdrop closes; clicks inside the card are stopped below.
    <div
      className="info-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
      onClick={onClose}
    >
      <div className="info-modal__card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="info-modal__close"
          onClick={onClose}
          aria-label={closeLabel}
        >
          ×
        </button>
        <h2 id="info-modal-title" className="info-modal__title">
          {title}
        </h2>
        <p className="info-modal__text">{text}</p>
      </div>
    </div>
  );
}

export default InfoModal;
