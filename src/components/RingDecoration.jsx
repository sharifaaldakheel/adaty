import "./RingDecoration.css";

/**
 * Animated concentric background rings shared across screens.
 * Purely decorative; hidden from assistive tech. The gentle drift is defined
 * in RingDecoration.css and disabled under `prefers-reduced-motion`.
 */
function RingDecoration() {
  return (
    <div className="ring-decoration" aria-hidden="true">
      <span className="ring ring--1" />
      <span className="ring ring--2" />
      <span className="ring ring--3" />
    </div>
  );
}

export default RingDecoration;
