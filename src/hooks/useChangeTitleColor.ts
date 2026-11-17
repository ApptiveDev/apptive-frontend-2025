import { useEffect, useRef, useState } from "react";

interface UseChangeTitleColorOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useChangeTitleColor = ({
  threshold = 0.3,
  rootMargin = "0px",
  triggerOnce = false,
}: UseChangeTitleColorOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        if (triggerOnce && isInView) {
          return;
        }

        setIsInView(inView);

        if (inView && triggerOnce) {
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, isInView]);

  return { ref, isInView };
};
