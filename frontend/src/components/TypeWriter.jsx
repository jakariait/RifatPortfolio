"use client";
import { useState, useEffect, useRef } from "react";

export default function TypeWriter({ text, className = "" }) {
  const [display, setDisplay] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.unobserve(currentElement);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(currentElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!text || !startTyping) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, index));
      index++;

      if (index > text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [text, startTyping]);

  return (
    <h1 ref={elementRef} className={`${className}`}>
      {display}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
