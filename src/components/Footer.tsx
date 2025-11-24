"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import instagramIcon from "@/assets/icons/instagram.svg";
import githubIcon from "@/assets/icons/github.svg";
import kakaotalkIcon from "@/assets/icons/kakaotalk.svg";
import notionIcon from "@/assets/icons/notion.svg";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/pnu_apptive?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: instagramIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/ApptiveDev",
      icon: githubIcon,
    },
    {
      name: "Notion",
      href: "https://apptive.notion.site/?source=copy_link",
      icon: notionIcon,
    },
    {
      name: "KakaoTalk Open Chat",
      href: "https://open.kakao.com/o/swV8poJh",
      icon: kakaotalkIcon,
    },
  ];

  return (
    <footer className="text-white bg-footer">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6 md:gap-8">
          {/* 왼쪽: 로고 및 정보 */}
          <div className="flex flex-col gap-2 md:gap-3 items-start w-full md:w-auto">
            <Image
              src="/logo/logo_full_black_small.svg"
              alt="APPTIVE Logo"
              width={237}
              height={54}
              className="h-6 md:h-9 w-auto"
            />
            <h2 className="text-3xl md:text-5xl font-bold">APPTIVE</h2>
            <p className="text-white text-sm md:text-base font-medium">
              부산대학교 IT 프로젝트 동아리
            </p>
            <p className="text-white text-xs font-medium">
              Copyright ©2025 APPTIVE. All rights reserved.
            </p>
          </div>

          {/* 오른쪽: Go to top 및 소셜 미디어 */}
          <div className="flex flex-col items-start md:items-end justify-between self-stretch w-full md:w-auto">
            <button
              onClick={scrollToTop}
              className="text-gray-300 hover:text-white transition-colors text-sm mb-4 md:mb-0"
            >
              Go to top ↑
            </button>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={48}
                    height={48}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
