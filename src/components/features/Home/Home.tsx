import { Header } from "@/components/layout/Header/Header";
import { HeroSection } from "@/components/features/Home/HeroSection";
import { IntroductionSection } from "@/components/features/Home/IntroductionSection";
import { ActivitySection } from "@/components/features/Home/ActivitySection";
import { PositionSection } from "@/components/features/Home/PositionSection";

export const Home = () => {
  return (
    <>
      <Header variant="dark" />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ActivitySection />
        <PositionSection />
      </main>
    </>
  );
};
