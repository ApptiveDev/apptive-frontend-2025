import { Header } from "@/components/layout/Header/Header";
import { HeroSection } from "@/components/features/Home/HeroSection";
import { IntroductionSection } from "@/components/features/Home/IntroductionSection";

export const Home = () => {
  return (
    <>
      <Header variant="dark" />
      <main>
        <HeroSection />
        <IntroductionSection />
      </main>
    </>
  );
};
