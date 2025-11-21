import { useState, useRef, useEffect } from "react";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  shouldStart?: boolean;
}

export const useCountUp = ({
  end,
  start = 0,
  duration = 2000,
  shouldStart = true,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [isComplete, setIsComplete] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!shouldStart) {
      setCount(start);
      setIsComplete(false);
      return;
    }
    const startTime = Date.now();
    const startValue = start;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const regulateSpeed = 1 - Math.pow(1 - progress, 4);

      const currentCount = Math.floor(
        startValue + (end - startValue) * regulateSpeed
      );

      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsComplete(true);
      }
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, start, shouldStart]);
  return { count, isComplete };
};
