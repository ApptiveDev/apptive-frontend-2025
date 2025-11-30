"use client";

import {
  useScrollSnapContainer,
  useScrollSnapSection,
} from "@/hooks/useScrollSnap";
import { useChangeHeaderColor } from "@/hooks/useChangeHeaderColor";
import { Header } from "@/components/layout/Header/Header";
import { HeroSection } from "@/components/features/Home/HeroSection";
import { IntroductionSection } from "@/components/features/Home/IntroductionSection";
import { ActivitySection } from "@/components/features/Home/ActivitySection";
import { PositionSection } from "@/components/features/Home/PositionSection";
import Footer from "@/components/Footer";

export const Home = () => {
  const { containerRef } = useScrollSnapContainer({
    axis: "y",
    type: "mandatory",
    smooth: true,
  });

  const headerVariant = useChangeHeaderColor();

  return (
    <>
      <Header variant={headerVariant} />
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
