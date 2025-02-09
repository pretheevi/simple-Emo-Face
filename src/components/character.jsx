import { useEffect, useRef, useState } from 'react';
import './../styles/character.css';

function Character() {
  const [calm, setCalm] = useState(false);
  const [blink, setBlink] = useState(false); // State for controlling blink
  const timer = useRef(null);
  const blinkTimer = useRef(null);

  function startCalmTimer() {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setCalm(true);
    }, 1000);
  }

  function onMouseDown() {
    startCalmTimer();
    stopBlinking(); // Stop blinking when caressing starts
  }

  function onMouseUp() {
    clearTimeout(timer.current);
    setTimeout(() => {
      setCalm(false);
    }, 2000);
    startRandomBlinking(); // Restart blinking when caressing ends
  }

  function handleTouchStart() {
    startCalmTimer();
    stopBlinking(); // Stop blinking when caressing starts
  }

  function handleTouchEnd() {
    clearTimeout(timer.current);
    setTimeout(() => {
      setCalm(false);
    }, 2000);
    startRandomBlinking(); // Restart blinking when caressing ends
  }

  function startRandomBlinking() {
    blinkTimer.current = setInterval(() => {
      if (!calm) {
        setBlink(true);
        setTimeout(() => setBlink(false), 300);
      }
    }, Math.random() * 5000 + 5000); // Random blink interval
  }

  function stopBlinking() {
    clearInterval(blinkTimer.current); // Clear the blinking interval
    setBlink(false); // Ensure blinking stops immediately
  }

  // Cleanup intervals
  useEffect(() => {
    startRandomBlinking();
    return () => {
      clearInterval(timer.current);
      clearInterval(blinkTimer.current);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className={`character-face-container ${calm ? 'calm' : ''} ${
            blink ? 'blink' : ''
          }`}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="d-flex flex-row justify-content-between">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;