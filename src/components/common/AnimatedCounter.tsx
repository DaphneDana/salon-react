import React, { useState, useEffect, useRef } from 'react';
import styles from './AnimatedCounter.module.css';

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number; // milliseconds
  startOnVisible?: boolean; // If true, waits for component to be visible
  className?: string;
  suffix?: string; // e.g., "+"
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetValue,
  duration = 2000,
  startOnVisible = true,
  className,
  suffix = '',
  prefix = ''
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible); // Start immediately if not waiting for visibility
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!startOnVisible || !counterRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const nextValue = Math.floor(percentage * targetValue);

      setCurrentValue(nextValue);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCurrentValue(targetValue); // Ensure it ends exactly on target
      }
    };

    requestAnimationFrame(animateCount);
  }, [targetValue, duration, isVisible]);

  return (
    <span ref={counterRef} className={`${styles.counterValue} ${className || ''}`}>
      {prefix}{currentValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;