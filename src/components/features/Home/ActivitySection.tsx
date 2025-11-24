"use client";

import { useState } from "react";
import Image from "next/image";

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
  const currentActivity = activities.find(
    (activity) => activity.title === selectedActivity
  );
  return (
    <section className="min-h-screen bg-bg-gray flex items-center justify-center px-4 md:px-35">
      <div className="container mx-auto">
        <div className="=max-w-8xl mx-auto lg:ml-40 md:ml-20">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-8 items-center md:items-start">
            {/* 왼쪽: 이미지*/}
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden md:col-span-7">
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

            {/* 오른쪽: 카테고리 탭 */}
            <div className="flex flex-col gap-3 md:col-span-3 text-xl md:text-xl lg:text-2xl">
              {activities.map((activity) => (
                <button
                  key={activity.title}
                  onClick={() => setSelectedActivity(activity.title)}
                  className={`pl-2 pb-3 text-center md:text-left transition-all duration-200 cursor-pointer ${
                    selectedActivity === activity.title
                      ? "text-foreground"
                      : "text-text-gray-light hover:text-foreground"
                  }
            `}
                >
                  {activity.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
