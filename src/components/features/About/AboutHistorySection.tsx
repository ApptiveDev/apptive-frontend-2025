"use client";

import { useState } from "react";

interface Achievement {
  title: string;
  award: string;
}

interface YearData {
  year: number;
  achievements: Achievement[];
}

const historyData: YearData[] = [
  {
    year: 2025,
    achievements: [
      {
        title: "전국 ICT 이노베이션 스퀘어 아이디어 및 SW 개발 공모전",
        award: "최우수상",
      },
      {
        title: "2025년 부산광역시 공공빅데이터 활용 창업경진대회",
        award: "장려상",
      },
      {
        title: "제6회 부울경ICT 아이디어 경진대회",
        award: "대상",
      },
      {
        title: "제6회 PNU 창의융합 해커톤",
        award: "대상, 최우수상, 최우수상",
      },
    ],
  },
  {
    year: 2024,
    achievements: [
      {
        title: "APPTIVE x WAP 지역 상생 해커톤",
        award: "우수상",
      },
      {
        title: "제 5기 B.SORI 경진대회",
        award: "최우수상",
      },
      {
        title: "제9회 지역사회 문제해결 아이디어톤",
        award: "특별상",
      },
      {
        title: "제5회 PNU 창의융합 해커톤",
        award: "우수상, 장려상",
      },
    ],
  },
  {
    year: 2023,
    achievements: [
      {
        title: "제11회 K-해커톤",
        award: "우수상",
      },
    ],
  },
  {
    year: 2022,
    achievements: [
      {
        title: "제3회 Path-hack",
        award: "대상",
      },
      {
        title: "제 3회 부산시 대학(원)생 아이디어 공모전",
        award: "우수상",
      },
    ],
  },
  {
    year: 2021,
    achievements: [
      {
        title: "ICT/SW 여성 창업공모전",
        award: "금상",
      },
      {
        title: "부산대학교 IDEA ARENA 창업경진대회",
        award: "대상",
      },
      {
        title: "제 9회 K-HACKATHON 대회 최우수상",
        award: "우수상",
      },
      {
        title: "부산대학교 해커톤",
        award: "장려상",
      },
    ],
  },
  {
    year: 2020,
    achievements: [
      {
        title: "2019 마케팅을 통한 Start-up, Step-up 성과발표회",
        award: "우수상",
      },
    ],
  },
  {
    year: 2019,
    achievements: [
      {
        title: "2019년 제 2회 부산대학교 창의융합 SW 해커톤",
        award: "최우수상, 우수상, 장려상",
      },
      {
        title: "2019 PNU Idea Arena",
        award: "대상",
      },
      {
        title: "2019년 서비스R&D 대학(원)생 아이디어 공모전",
        award: "우수상",
      },
      {
        title: "2019 유니버셜디자인 & 보조기기 아이디어 공모전",
        award: "대상(현대자동차 대표이사상)",
      },
      {
        title: "2019 스마트시티 서비스 개발 경진대회",
        award: "대상",
      },
      {
        title: "제 2회 PNU-JBNU Dream-hi 창업캠프",
        award: "우수상",
      },
    ],
  },
  {
    year: 2018,
    achievements: [
      {
        title: "제 1회 창의융합소프트웨어 해커톤 대회",
        award: "최우수상, 장려상",
      },
      {
        title: "인터랙티브미디어 영상공모전",
        award: "3위",
      },
      {
        title: "제1회 스타트업과 함께하는 메이커톤",
        award: "3위(페이보리, 부산대SW중심대학)",
      },
      {
        title: "2018 스타트업 스파르탄 레이스",
        award: "대상(부산정보산업진흥원)",
      },
      {
        title: "2018 부산 청년 일자리 해커톤",
        award: "우수상(부경대학교총장상)",
      },
    ],
  },
  {
    year: 2017,
    achievements: [
      {
        title: "PNU 창업동아리 발굴육성사업",
        award: "장려상",
      },
      {
        title: "Bu:Star 챌린지 게임 공모전",
        award: "대상",
      },
      {
        title: "전국 대학생 ICT융합 창업경진대회",
        award: "우수상",
      },
      {
        title: "PNU 창업동아리 발굴 육성사업 최종 10개팀",
        award: "최우수상",
      },
    ],
  },
  {
    year: 2016,
    achievements: [
      {
        title: "제1회 창의프로젝트 경진대회",
        award: "우수상, 장려상",
      },
      {
        title: "부산대 창업동아리",
        award: "장려상",
      },
      {
        title: "PIBA 2016 기술 사업화 경진대회",
        award: "우수상",
      },
      {
        title: "부산권 지역선도 제1회 창의 프로젝트",
        award: "우수상",
      },
      {
        title: "부산권 지역선도 제2회 창의 프로젝트",
        award: "장려상",
      },
    ],
  },
  {
    year: 2015,
    achievements: [
      {
        title: "부산대학교 우수창업동아리",
        award: "장려상 수상",
      },
    ],
  },
  {
    year: 2014,
    achievements: [
      {
        title: "동남권 창업경진대회",
        award: "최우수상",
      },
      {
        title: "부산대학교 우수창업동아리",
        award: "최우수상 수상",
      },
      {
        title: "대경동남권 창업지락",
        award: "창의우수상",
      },
      {
        title: "부산대학교 idea start-up 경진대회",
        award: "금상",
      },
      {
        title: "전국 천하제일 창업동아리 경진대회",
        award: "한국콘텐츠진흥원장상",
      },
    ],
  },
  {
    year: 2013,
    achievements: [
      {
        title: "부산대 어플 개발 동아리 앱티브 개설",
        award: "",
      },
    ],
  },
];

const years = historyData.map((data) => data.year);

export const AboutHistorySection = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const currentYearData = historyData.find(
    (data) => data.year === selectedYear,
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 상단 라벨 */}
          <p
            className="text-text-secondary text-sm uppercase font-extrabold"
            style={{ fontFamily: "var(--font-suit), SUIT, sans-serif" }}
          >
            HISTORY
          </p>

          {/* 좌우 레이아웃 */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-10 mt-1 md:mt-2 lg:mt-3">
            {/* 좌측: 제목, 설명, 연도 목록 */}
            <div className="flex flex-col">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold !mb-1 md:!mb-2 lg:!mb-3"
                style={{
                  fontFamily: "var(--font-suit), SUIT, sans-serif",
                  color: "#0F1012",
                }}
              >
                앱티브의 {selectedYear}년
              </h2>
              <p
                className="text-sm md:text-sm font-regular mb-6 md:mb-8"
                style={{
                  fontFamily: "var(--font-suit), SUIT, sans-serif",
                  color: "#282A2E",
                }}
              >
                {selectedYear}년 한 해 동안 동아리원들의 성과를 소개합니다.
              </p>

              {/* 연도 목록 - 스크롤 가능 */}
              <div className="flex w-28 mx-auto ml-20 flex-col gap-5 max-h-[400px] overflow-y-scroll pl-5 pr-45 items-center mt-4 custom-scrollbar">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className="flex w-full items-center justify-center text-center gap-3 transition-colors"
                  >
                    <span
                      className="w-full font-bold text-center"
                      style={{
                        fontFamily: "var(--font-suit), SUIT, sans-serif",
                        color: selectedYear === year ? "#71787F" : "#B4B9BE",
                        fontSize: selectedYear === year ? "24px" : "20px",
                      }}
                    >
                      {year}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 우측: 성과 리스트 */}
            <div className="space-y-3">
              {currentYearData && currentYearData.achievements.length > 0 ? (
                currentYearData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="rounded-lg px-5 md:px-7 py-3 md:py-4 flex flex-col justify-center"
                    style={{
                      backgroundColor: "#F8F9FA",
                      width: "702px",
                      height: "120px",
                    }}
                  >
                    <p
                      className="text-sm md:text-base lg:text-lg font-bold mb-1"
                      style={{
                        fontFamily: "var(--font-suit), SUIT, sans-serif",
                        color: "#282A2E",
                      }}
                    >
                      {achievement.title}
                    </p>
                    <p
                      className="text-sm md:text-base text-text-secondary font-bold"
                      style={{
                        fontFamily: "var(--font-suit), SUIT, sans-serif",
                        color: "#71787F",
                      }}
                    >
                      {achievement.award}
                    </p>
                  </div>
                ))
              ) : (
                <div
                  className="rounded-lg px-4 md:px-6 py-3 md:py-4 flex flex-col justify-center"
                  style={{
                    backgroundColor: "#F8F9FA",
                    width: "702px",
                    height: "120px",
                  }}
                >
                  <p
                    className="text-sm md:text-base text-text-secondary"
                    style={{
                      fontFamily: "var(--font-suit), SUIT, sans-serif",
                    }}
                  >
                    {selectedYear}년 성과 데이터가 없습니다.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
