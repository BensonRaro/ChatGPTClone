"use client";

import { useState, useEffect } from "react";

/**
 * TypingEffect is a React component that displays text with a typing effect.
 * It takes in a text prop and progressively reveals each character over time.
 *
 * It uses useState hooks to manage the currently displayed text and index.
 * useEffect sets up an interval to reveal one more character every 100ms.
 * It clears the interval when all text has been revealed.
 */
const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setShowCursor(false); // Hide cursor when typing completes
      }
    }, 100); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      {showCursor && <span>|</span>}
    </span>
  );
};

export default TypingEffect;
