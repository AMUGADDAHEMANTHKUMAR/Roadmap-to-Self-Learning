import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingText({ text, speed = 50, className = "", onComplete }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    // Reset when text changes
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <span className="typing-cursor animate-pulse text-primary">|</span>
      )}
    </span>
  );
}