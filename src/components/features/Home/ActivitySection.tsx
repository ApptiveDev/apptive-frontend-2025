"use client";

import { useState } from "react";
import Image from "next/image";
import { useChangeTitleColor } from "@/hooks/useChangeTitleColor";
import { useScrollSnapSection } from "@/hooks/useScrollSnap";

type ActivityCategory = "Study" | "Seminar" | "Ideaton" | "Demo Day";

interface ActivityData {
  title: ActivityCategory;
  imagePath: string;
}

const activities: ActivityData[] = [
  { title: "Study", imagePath: "/images/landing_study.png" },
  { title: "Seminar", imagePath: "/images/landing_seminar.png" },
  { title: "Ideaton", imagePath: "/images/landing_ideaton.png" },
  { title: "Demo Day", imagePath: "/images/landing_demoday.png" },
];

export const ActivitySection = () => {
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityCategory>("Study");
  const { ref: colorRef, isInView } = useChangeTitleColor({
    threshold: 0.8,
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

  const currentActivity = activities.find(
    (activity) => activity.title === selectedActivity
  );

  return (
    <section
      ref={combineRefs}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-row justify-between">
          <div
            className={`mb-3 text-md font-semibold transition-colors duration-500 ${
              isInView ? "text-primary" : "text-[#9FA0AB]"
            }`}
          >
            ACTIVITY
          </div>
        </div>

        {/* 데스크톱: 이미지 + 탭 가로 배치 */}
        <div className="hidden md:grid md:grid-cols-10 gap-6 md:gap-8 items-center md:items-start">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden md:col-span-8">
            {activities.map((activity) => (
              <Image
                key={activity.title}
                src={activity.imagePath}
                alt={activity.title}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  selectedActivity === activity.title
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                priority
              />
            ))}
          </div>

          {/* 오른쪽: 카테고리 탭*/}
          <div className="flex flex-col items-start gap-3 md:col-span-2 text-xl md:text-xl lg:text-2xl">
            {activities.map((activity) => (
              <button
                key={activity.title}
                onClick={() => setSelectedActivity(activity.title)}
                className={`w-fit pl-2 pb-3 text-left transition-all duration-200 cursor-pointer ${
                  selectedActivity === activity.title
                    ? "text-foreground"
                    : "text-text-gray-light hover:text-foreground"
                }`}
              >
                {activity.title}
              </button>
            ))}
            <button className="w-fit pl-2 pb-3 text-left !text-xl transition-all duration-200 cursor-pointer text-text-gray-light hover:text-foreground hover:border-foreground mt-2">
              more
            </button>
          </div>
        </div>

        {/* 모바일: 탭 + 이미지 세로 배치 */}
        <div className="md:hidden flex flex-col">
          <div className="flex flex-row gap-4 text-2xl overflow-x-auto pb-2 scrollbar-hide">
            {activities.map((activity) => (
              <button
                key={activity.title}
                onClick={() => setSelectedActivity(activity.title)}
                className={`flex-shrink-0 pl-2 pb-3 whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedActivity === activity.title
                    ? "text-foreground"
                    : "text-text-gray-light hover:text-foreground"
                }`}
              >
                {activity.title}
              </button>
            ))}
          </div>

          {/* 이미지 */}
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            {activities.map((activity) => (
              <Image
                key={activity.title}
                src={activity.imagePath}
                alt={activity.title}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  selectedActivity === activity.title
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                priority
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
