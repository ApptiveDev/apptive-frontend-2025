"use client";

import Image from "next/image";

export const AboutHeroSection = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[684px] flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about_hero.jpg"
          alt="About APPTIVE"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <h2
            className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-suit)" }}
          >
            About APPTIVE
          </h2>
        </div>
      </div>
    </section>
  );
};
