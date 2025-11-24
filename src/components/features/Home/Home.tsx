import { Header } from "@/components/layout/Header/Header";
import { HeroSection } from "@/components/features/Home/HeroSection";
import { IntroductionSection } from "@/components/features/Home/IntroductionSection";
import { ActivitySection } from "@/components/features/Home/ActivitySection";

export const Home = () => {
  return (
    <>
      <Header variant="dark" />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ActivitySection />
      </main>
    </>
  );
};
