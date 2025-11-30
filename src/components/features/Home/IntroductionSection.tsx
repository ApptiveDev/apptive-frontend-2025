"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useScrollSnapSection } from "@/hooks/useScrollSnap";
import { useChangeTitleColor } from "@/hooks/useChangeTitleColor";

export const IntroductionSection = () => {
  const { sectionRef: section1Ref } = useScrollSnapSection("start");
  const { sectionRef: section2Ref } = useScrollSnapSection("start");

  const { ref: section1ColorRef, isInView: isSection1InView } =
    useChangeTitleColor({
      threshold: 0.3,
      triggerOnce: true,
    });

  const { ref: colorRef, isInView: isSection2InView } = useChangeTitleColor({
    threshold: 0.5,
    triggerOnce: true,
  });

  const counterProjects = useCountUp({
    end: 21,
    shouldStart: isSection2InView,
  });
  const counterMembers = useCountUp({
    end: 100,
    shouldStart: isSection2InView,
  });

  const isBothCountersComplete =
    counterProjects.isComplete && counterMembers.isComplete;

  const combineSection1Refs = (element: HTMLElement | null) => {
    if (element) {
      (section1Ref as React.MutableRefObject<HTMLElement | null>).current =
        element;
      (section1ColorRef as React.MutableRefObject<HTMLElement | null>).current =
        element;
    }
  };

  const combineSection2Refs = (element: HTMLElement | null) => {
    if (element) {
      (section2Ref as React.MutableRefObject<HTMLElement | null>).current =
        element;
      (colorRef as React.MutableRefObject<HTMLElement | null>).current =
        element;
    }
  };

  return (
    <>
      <section
        ref={combineSection1Refs}
        header-variant-by-section="gray"
        className="min-h-screen bg-bg-gray flex items-center justify-center"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2
              className={`text-foreground text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-700 ${
                isSection1InView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              Be Creative, Be Active
            </h2>
            <h2
              className={`text-foreground text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-700 ${
                isSection1InView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Be Apptive.
            </h2>
          </div>
        </div>
      </section>
      <section
        ref={combineSection2Refs}
        className="min-h-screen bg-bg-gray flex items-center justify-center"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* 카운터 영역 */}
            <div className="flex justify-center gap-12 md:gap-28 mb-12">
              <div>
                <p className="text-brand-dark text-6xl md:text-7xl lg:text-8xl font-bold">
                  {counterProjects.count}
                  {counterProjects.isComplete && "+"}
                </p>
                <div className="mt-4 text-sm md:text-lg text-text-gray-dark">
                  완성된 프로젝트 수
                </div>
              </div>
              <div>
                <p className="text-brand-dark text-6xl md:text-7xl lg:text-8xl font-bold">
                  {counterMembers.count}
                  {counterMembers.isComplete && "+"}
                </p>
                <div className="mt-4 text-sm md:text-lg text-text-gray-dark">
                  명예회원 전환 수
                </div>
              </div>
            </div>
          </div>
          <div
            className={`text-center md:text-xl lg:text-2xl font-semibold transition-colors duration-700 ${
              isBothCountersComplete ? "text-primary" : "text-[#9FA0AB]"
            }`}
          >
            Since 2013
          </div>
        </div>
      </section>
    </>
  );
};
