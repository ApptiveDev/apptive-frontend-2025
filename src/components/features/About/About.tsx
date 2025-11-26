import { Header } from "@/components/layout/Header/Header";
import { AboutHeroSection } from "@/components/features/About/AboutHeroSection";
import { AboutActivitySection } from "@/components/features/About/AboutActivitySection";
import { AboutCurriculumSection } from "@/components/features/About/AboutCurriculumSection";
import { AboutHistorySection } from "@/components/features/About/AboutHistorySection";

export const About = () => {
  return (
    <>
      <Header variant="dark" />
      <main>
        <AboutHeroSection />
        <AboutActivitySection />
        <AboutCurriculumSection />
        <AboutHistorySection />
      </main>
    </>
  );
};
