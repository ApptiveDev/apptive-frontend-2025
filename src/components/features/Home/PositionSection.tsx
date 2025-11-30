"use client";

import { useChangeTitleColor } from "@/hooks/useChangeTitleColor";
import { useScrollSnapSection } from "@/hooks/useScrollSnap";
import Card from "@/components/features/Home/components/Card";

const positions = [
  {
    title: "PO",
    description:
      "교차기능팀에서 해결하고자 하는 문제를 분석하고, 사용자 관점에서 최적의 솔루션을 도출하는 방법을 연습합니다.",
  },
  {
    title: "PD",
    description:
      "사용자 중심의 프로덕트 디자인을 이해하고, 다른 직군과 함께 일하는 협업 프로세스를 배웁니다.",
  },
  {
    title: "Frontend",
    description:
      "사용자와 가장 가까운 화면을 만드는 역할로, React.js를 활용해 직관적이고 매력적인 웹 경험을 구현합니다. 논리적 사고와 UI 구현 감각을 함께 발전시킵니다.",
  },
  {
    title: "Android",
    description:
      "안드로이드 직군은 모바일 환경에서 직접 실행되는 앱을 개발합니다. Kotlin과 Android Studio를 사용해 화면 구현부터 서버 연동까지 앱 개발 전반을 실습하며, 실무에 필요한 개발 감각과 노하우를 함께 익힙니다.",
  },
  {
    title: "Backend",
    description:
      "서버와 데이터베이스를 중심으로, 서비스의 비즈니스 로직을 설계하고 구현합니다. 사용자의 요청이 어떻게 처리되고, 데이터를 어떻게 관리 및 보호해야 하는지 이해하며, 안정적이고 확장 가능한 서버를 구성하기 위한 과정을 배웁니다.",
  },
  {
    title: "Game",
    description:
      "게임을 만드는 데 필요한 핵심 개념을 익히고, 여러 직군과 협업하여 실제로 게임을 만들어봅니다.",
  },
];

export const PositionSection = () => {
  const { ref: colorRef, isInView } = useChangeTitleColor({
    threshold: 0.7,
    triggerOnce: false,
  });
  const { sectionRef: snapRef } = useScrollSnapSection("start");

  const combineRefs = (element: HTMLElement | null) => {
    if (element) {
      (colorRef as React.MutableRefObject<HTMLElement | null>).current =
        element;
      (snapRef as React.MutableRefObject<HTMLElement | null>).current = element;
    }
  };

  return (
    <section
      ref={combineRefs}
      className="w-full max-w-4xl mx-auto py-32 px-2 flex items-center"
    >
      <div className="w-full space-y-2">
        <div
          className={`ml-1 mb-5 text-sm md:text-base font-semibold transition-colors duration-700 ${
            isInView ? "text-primary" : "text-[#9FA0AB]"
          }`}
        >
          POSITION
        </div>
        {positions.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  );
};
