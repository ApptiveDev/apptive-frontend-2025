import { Header } from "@/components/layout/Header/Header";
import { AboutHeroSection } from "@/components/features/About/AboutHeroSection";
import { AboutActivitySection } from "@/components/features/About/AboutActivitySection";
import { AboutCurriculumSection } from "@/components/features/About/AboutCurriculumSection";
import { AboutHistorySection } from "@/components/features/About/AboutHistorySection";
import Footer from "@/components/Footer";
import {getAllCurriculums} from "@/app/curriculum_service";
import {CurriculumItem, Position} from "@/app/curriculum_dto";

export default async function About() {

    const curriculums: Record<Position, CurriculumItem[]> = await getAllCurriculums();

  return (
    <>
      <Header variant="dark" />
      <main>
        <AboutHeroSection />
        <AboutActivitySection />
        <AboutCurriculumSection curriculums={curriculums}/>
        <AboutHistorySection />
        <Footer />
      </main>
    </>
  );
};
