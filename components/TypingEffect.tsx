"use client";

import { useState, useEffect, useRef } from "react";

import { useTypeEffect } from "@/store/useTypeEffect";
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

  const { setConversationId } = useTypeEffect();

  const containerRef = useRef<HTMLDivElement>(null); // Reference to the container element

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        setConversationId("");
        clearInterval(interval);
        setShowCursor(false); // Hide cursor when typing completes
      }
    }, 30); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <span className="relative overflow-y-auto h-screen">
      <div ref={containerRef}>
        <span className="relative">{displayText}</span>
        {showCursor && (
          <span className="absolute h-4 w-4 bg-white rounded-full mt-[4px] ml-1" />
        )}
      </div>
    </span>
  );
};

export default TypingEffect;
