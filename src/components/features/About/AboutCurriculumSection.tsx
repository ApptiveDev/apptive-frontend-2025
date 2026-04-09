"use client";

import { useEffect, useRef, useState } from "react";

type Position =
  | "기획"
  | "디자인"
  | "프론트엔드"
  | "안드로이드"
  | "백엔드"
  | "게임";

interface CurriculumItem {
  title: string;
}

const curriculumData: Record<Position, CurriculumItem[]> = {
  기획: [
    { title: "애자일 방법론을 적용한 프로젝트 진행" },
    { title: "문제 정의하기와 솔루션" },
    { title: "공유된 이해를 위한 1pager 작성" },
    { title: "유저 스토리를 통한 솔루션 구체화" },
    { title: "지표를 통해 제품/비지니스 바라보기" },
  ],
  디자인: [
    {
      title:
        "UX 기초 - 사용자 문제 정의, 페르소나, 유저 플로우, 와이어프레임 제작",
    },
    { title: "피그마 심화 - 컴포넌트 관리, 오토레이아아웃, 프로토타이핑" },
    { title: "디자인시스템 구축 및 관리" },
    { title: "사용성 테스트" },
    { title: "협업 시스템 이해 및 원활한 커뮤니케이션 방법" },
  ],
  프론트엔드: [
    { title: "React 기본 - state, effect, context 등 Hook 사용법" },
    {
      title:
        "React 심화 - CustomHook 설계, Form 상태 관리, Tanstack Query 등 라이브러리 학습",
    },
    { title: "실전 적용 - 실습 및 과제, UI 설계 및 구현, 실전 감각 배양" },
  ],
  안드로이드: [
    { title: "Kotlin 기본 문법과 앱 구조 이해" },
    { title: "Jetpack Compose를 활용한 UI 설계 및 상태 관리" },
    { title: "Retrofit, Coroutine을 이용한 서버 통신과 데이터 처리" },
    { title: "MVVM 아키텍처로 효율적인 코드 구조 학습" },
    { title: "실제 서비스 기능 구현과 앱 배포 프로세스 경험" },
  ],
  백엔드: [
    {
      title:
        "기초 이해 -  Low-level 구현을 통한 서버 동작 원리 및 프레임워크의 추상화 이해",
    },
    {
      title:
        "개발 기초 - Layered Architecture 기반 CRUD, 올바른 DTO(Record) 사용과 Validation 적용",
    },
    {
      title:
        "웹 표준과 API 설계 - HTTP(메서드, 상태코드), RESTful API 설계 원칙, 효율적인 요청/응답 처리",
    },
    {
      title:
        "데이터 영속성과 테스트 -  ORM과 객체/데이터 중심 패러다임의 이해, 영속성 계층 심화",
    },
    { title: "심화 테스트 코드 작성 - 단위/통합 테스트 실습 " },
    {
      title:
        "보안 및 심화 운영 - 인증/인가(JWT/Session), 웹 보안 이슈(CORS/CSRF), 트랜잭션&Spring 심화 동작 원리",
    },
  ],
  게임: [
    { title: "유니티 엔진 기초" },
    { title: "충돌 처리" },
    { title: "코루틴, 변수 참조, UI" },
    { title: "행동 상태, 사운드, 애니메이션" },
    { title: "객체 지향 프로그래밍" },
    { title: "오브젝트 풀" },
  ],
};

const positions: Position[] = [
  "기획",
  "디자인",
  "프론트엔드",
  "안드로이드",
  "백엔드",
  "게임",
];

export const AboutCurriculumSection = () => {
  const [selectedPosition, setSelectedPosition] = useState<Position>("기획");
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const currentCurriculum = curriculumData[selectedPosition];

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 상단 라벨 */}
          <p
            className="text-text-secondary text-sm uppercase font-extrabold"
            style={{
              fontFamily: "var(--font-suit), SUIT, sans-serif",
              color: isInView ? "#FF7C0A" : undefined,
              transition: "color 300ms ease",
            }}
          >
            CURRICULUM
          </p>

          {/* 좌우 레이아웃 */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-10 mt-1 md:mt-2 lg:mt-3">
            {/* 좌측: 제목 및 설명 */}
            <div className="">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold !mb-1 md:!mb-2 lg:!mb-3"
                style={{
                  fontFamily: "var(--font-suit), SUIT, sans-serif",
                  color: "#0F1012",
                }}
              >
                25-2 스터디 커리큘럼
              </h2>
              <p
                className="text-base md:text-base"
                style={{
                  fontFamily: "var(--font-suit), SUIT, sans-serif",
                  color: "#282A2E",
                }}
              >
                스터디는 동아리 입부 후 한 학기 동안 이루어지며, 매학기
                스터디원들의 의사를 고려하여 커리큘럼이 변경됩니다.
              </p>
            </div>

            {/* 우측: 직군 버튼들 및 커리큘럼 리스트 */}
            <div>
              {/* 직군 버튼들 */}
              <div className="flex flex-col gap-2 mb-6 md:mb-8">
                {/* 첫 번째 행 - 모바일: 2열, 데스크톱: 4개 */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2">
                  {positions.slice(0, 4).map((position) => (
                    <button
                      key={position}
                      onClick={() => setSelectedPosition(position)}
                      className={`rounded-lg text-xs md:text-sm lg:text-base transition-colors flex items-center justify-center w-full md:w-[152px] h-[44px] md:h-[49px] ${
                        selectedPosition === position
                          ? "bg-bg-gray text-foreground"
                          : "bg-white text-text-secondary "
                      }`}
                      style={{
                        fontFamily: "var(--font-suit), SUIT, sans-serif",
                      }}
                    >
                      {position}
                    </button>
                  ))}
                </div>
                {/* 두 번째 행 - 모바일: 2열, 데스크톱: 2개 */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2">
                  {positions.slice(4).map((position) => (
                    <button
                      key={position}
                      onClick={() => setSelectedPosition(position)}
                      className={`rounded-lg text-xs md:text-sm lg:text-base transition-colors flex items-center justify-center w-full md:w-[152px] h-[44px] md:h-[49px] ${
                        selectedPosition === position
                          ? "bg-bg-gray text-foreground"
                          : "bg-white text-text-secondary "
                      }`}
                      style={{
                        fontFamily: "var(--font-suit), SUIT, sans-serif",
                      }}
                    >
                      {position}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* 커리큘럼 항목 리스트 - 데스크톱 버전*/}
          <div className="hidden md:block space-y-3">
            {currentCurriculum.map((item, index) => (
              <div
                key={index}
                className="rounded-lg px-4 md:px-6 py-3 md:py-4 text-center"
                style={{
                  backgroundColor: "#F8F9FA",
                }}
              >
                <p
                  className="text-sm md:text-base lg:text-lg font-semibold"
                  style={{
                    fontFamily: "var(--font-suit), SUIT, sans-serif",
                    color: "#0F1012",
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          {/* 커리큘럼 항목 리스트 - 모바일에서만 표시 */}
          <div className="md:hidden space-y-3 mt-6">
            {currentCurriculum.map((item, index) => (
              <div
                key={index}
                className="rounded-lg px-4 py-3 text-center"
                style={{
                  backgroundColor: "#F8F9FA",
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{
                    fontFamily: "var(--font-suit), SUIT, sans-serif",
                    color: "#0F1012",
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
