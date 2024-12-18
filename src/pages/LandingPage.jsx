import { useState, useRef } from "react";
import "../landingpage.css";

const LandingPage = ({ onButtonClick }) => {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);

  const handleMouseDown = (event) => {
    event.preventDefault(); // Sprječava nepoželjne default akcije
    setIsHolding(true);
    setProgress(0);

    timerRef.current = setTimeout(() => {
      onButtonClick();
    }, 1500);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / 1500) * 60;
        if (newProgress >= 100) {
          clearInterval(intervalRef.current);
        }
        return newProgress;
      });
    }, 60);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
    clearTimeout(timerRef.current);
    clearInterval(intervalRef.current);
    setProgress(0);
  };

  return (
    <div className="landing-page">
      <div className="present">
        <img
          src="/assets/images/present.jpg"
          alt="Present Image"
        />
      </div>

      <button
        className="start-button"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        style={{
          background: `radial-gradient(circle, blueviolet ${progress}%, red ${progress}%)`,
        }}
      >
        {isHolding ? `Hold still` : "Hold Me"}
      </button>
    </div>
  );
};

export default LandingPage;