import { Header } from "@/components/layout/Header/Header";
import { AboutHeroSection } from "@/components/features/About/AboutHeroSection";
import { AboutActivitySection } from "@/components/features/About/AboutActivitySection";
import { AboutCurriculumSection } from "@/components/features/About/AboutCurriculumSection";
import { AboutHistorySection } from "@/components/features/About/AboutHistorySection";
import Footer from "@/components/Footer";
import {getAllHistories} from "@/app/history_service";

export default async function About() {
    const historyData = await getAllHistories();

  return (
    <>
      <Header variant="dark" />
      <main>
        <AboutHeroSection />
        <AboutActivitySection />
        <AboutCurriculumSection />
        <AboutHistorySection historyData={historyData}/>
        <Footer />
      </main>
    </>
  );
};
