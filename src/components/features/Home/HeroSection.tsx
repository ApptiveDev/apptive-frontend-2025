"use client";

import { useScrollSnapSection } from "@/hooks/useScrollSnap";

export const HeroSection = () => {
  const { sectionRef } = useScrollSnapSection("start");

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="min-h-screen bg-bg-dark flex items-center justify-center"
    >
      <div className="container mx-auto px-4"></div>
    </section>
  );
};
