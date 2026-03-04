"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function TypingAnimation({ text, duration = 45, delay = 500, className }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 600);
        }
      }, duration);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, duration, delay]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="typing-cursor">|</span>}
    </span>
  );
}
