"use client";

import { Header } from "@/components/layout/Header/Header";
import { HeroSection } from "@/components/features/Home/HeroSection";
import { IntroductionSection } from "@/components/features/Home/IntroductionSection";
import { ActivitySection } from "@/components/features/Home/ActivitySection";
import { PositionSection } from "@/components/features/Home/PositionSection";
import Footer from "@/components/Footer";
import {
  useScrollSnapContainer,
  useScrollSnapSection,
} from "@/hooks/useScrollSnap";

export const Home = () => {
  const { containerRef } = useScrollSnapContainer({
    axis: "y",
    type: "mandatory",
    smooth: true,
  });

  return (
    <>
      <Header variant="dark" />
      <main
        ref={containerRef as React.RefObject<HTMLElement>}
        className="h-screen overflow-y-scroll"
      >
        <HeroSection />
        <IntroductionSection />
        <ActivitySection />
        <LastSection />
      </main>
    </>
  );
};

const LastSection = () => {
  const { sectionRef } = useScrollSnapSection("start");

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen flex flex-col"
    >
      <div className="flex-1 flex items-center justify-center">
        <PositionSection />
      </div>
      <Footer />
    </div>
  );
};
