"use client";

import { useCountUp } from "@/hooks/useCountUp";

export const IntroductionSection = () => {
  const counterProjects = useCountUp({ end: 21 });
  const counterMembers = useCountUp({ end: 100 });

  return (
    <>
      <section className="min-h-screen bg-bg-gray flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Be Creative, Be Active
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Be Apptive.
            </h2>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-bg-gray flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* 카운터 영역 */}
            <div className="flex justify-center gap-12 md:gap-28 mb-12">
              <div>
                <p className="text-6xl md:text-7xl lg:text-8xl font-bold">
                  {counterProjects.count}
                  {counterProjects.isComplete && "+"}
                </p>
                <div className="mt-4 text-sm md:text-lg text-text-gray-dark">
                  완성된 프로젝트 수
                </div>
              </div>
              <div>
                <p className="text-6xl md:text-7xl lg:text-8xl font-bold">
                  {counterMembers.count}
                  {counterMembers.isComplete && "+"}
                </p>
                <div className="mt-4 text-sm md:text-lg text-text-gray-dark">
                  명예회원 전환 수
                </div>
              </div>
            </div>
          </div>
          <div className="text-center md:text-xl lg:text-2xl font-semibold text-text-secondary">
            Since 2013
          </div>
        </div>
      </section>
    </>
  );
};
