import { Header } from "@/components/layout/Header/Header";
import { AboutHeroSection } from "@/components/features/About/AboutHeroSection";
import { AboutActivitySection } from "@/components/features/About/AboutActivitySection";
import { AboutCurriculumSection } from "@/components/features/About/AboutCurriculumSection";
import { AboutHistorySection } from "@/components/features/About/AboutHistorySection";
import Footer from "@/components/Footer";
import {getAllCurriculums} from "@/app/curriculum_service";
import {CurriculumItem, Position} from "@/app/curriculum_dto";
import {getAllHistories} from "@/app/history_service";

// Promise 처리를 위해, About 부분을 비동기 함수화
export default async function About() {
    // DB에서 데이터를 가져오는 함수이며, Promise 반환을 진행하기에 await로 수정
    const historyData = await getAllHistories();
    const curriculums: Record<Position, CurriculumItem[]> = await getAllCurriculums();

  return (
    <>
      <Header variant="dark" />
      <main>
        <AboutHeroSection />
        <AboutActivitySection />
        <AboutCurriculumSection curriculums={curriculums}/>
        <AboutHistorySection historyData={historyData}/>
        <Footer />
      </main>
    </>
  );
}