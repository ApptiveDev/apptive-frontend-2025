import { useState, useEffect } from "react";

type HeaderVariant = "dark" | "light" | "gray";

const HEADER_HEIGHT =
  typeof window !== "undefined" && window.innerWidth < 768 ? 52 : 60; // 모바일, 데스크탑 분리

export const useChangeHeaderColor = () => {
  const [HeaderVariant, setHeaderVariant] = useState<HeaderVariant>("dark");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "[header-variant-by-section]"
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.boundingClientRect.top <= HEADER_HEIGHT
          ) {
            const headerVariant = entry.target.getAttribute(
              "header-variant-by-section"
            ) as HeaderVariant;
            if (headerVariant) {
              setHeaderVariant(headerVariant);
            }
          }
        });
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.1, 1],
      }
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return HeaderVariant;
};
