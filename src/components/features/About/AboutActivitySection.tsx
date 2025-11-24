"use client";

import Image from "next/image";

interface ActivityItem {
  title: string;
  description: string;
}

const activities: ActivityItem[] = [
  {
    title: "스터디",
    description: "동아리 가입 후 첫 학기에는 직군 별로 스터디를 진행합니다.",
  },
  {
    title: "아이디어톤",
    description:
      "다음 학기 프로젝트에 참가하는 인원이 모두 모여 아이디어를 내고 팀빌딩을 진행합니다.",
  },
  {
    title: "세미나",
    description:
      "총 3번의 세미나를 통해 프로젝트 진행사항을 공유하고 어려움을 겪는 부분에 대해 함께 의견을 나눕니다.",
  },
  {
    title: "데모데이",
    description: "완성된 프로젝트를 소개하고 시연하는 시간을 가집니다.",
  },
];

export const AboutActivitySection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 상단 라벨 */}
          <p
            className="text-text-secondary text-sm uppercase"
            style={{ fontFamily: "var(--font-suit), SUIT, sans-serif" }}
          >
            ACTIVITY
          </p>
          {/* 좌우 레이아웃 */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-10 mt-1 md:mt-2 lg:mt-3">
            {/* 좌측: 한 학기 활동 */}
            <div className="">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold !mb-1 md:!mb-2 lg:!mb-3"
                style={{
                  fontFamily: "var(--font-pretendard), Pretendard, sans-serif",
                  color: "#0F1012",
                }}
              >
                한 학기 활동
              </h2>
              <p
                className="text-base md:text-base"
                style={{
                  fontFamily: "var(--font-pretendard), Pretendard, sans-serif",
                  color: "#282A2E",
                }}
              >
                앱티브 활동은 스터디 한 학기, 프로젝트 한 학기 동안 이루어지며
                두 학기 활동 종료 후에는 명예회원으로 전환됩니다.
              </p>
            </div>

            {/* 우측: 활동 리스트 */}
            <div className="space-y-20 ">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* 아이콘 */}
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/logo/logo_small.svg"
                      alt="Activity icon"
                      width={32}
                      height={34}
                      className="w-8 h-8"
                    />
                  </div>

                  {/* 텍스트 */}
                  <div className="flex-1">
                    <h3
                      className="text-xl md:text-2xl font-bold text-foreground mb-2"
                      style={{
                        fontFamily:
                          "var(--font-pretendard), Pretendard, sans-serif",
                      }}
                    >
                      {activity.title}
                    </h3>
                    <p
                      className="text-text-secondary text-base md:text-lg font-medium"
                      style={{
                        fontFamily:
                          "var(--font-pretendard), Pretendard, sans-serif",
                      }}
                    >
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
