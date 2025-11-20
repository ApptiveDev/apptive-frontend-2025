import Image from "next/image";

interface HeaderProps {
  logoImage?: string;
  logoAlt?: string;
}

export const Header = ({
  logoImage = "/logo_full_black.svg",
  logoAlt = "APPTIVE",
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-50 py-3 md:py-4 bg-[#282A2E]">
      <div className="text-2xl font-bold shrink-0">
        <Image
          src={logoImage}
          alt={logoAlt}
          width={120}
          height={27}
          className="w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto"
          priority
        />
      </div>

      {/* Navigation - 반응형 간격 및 텍스트 크기 */}
      <nav className="flex items-center gap-3 sm:gap-5 md:gap-7 lg:gap-9">
        <a
          href="/about"
          className="text-xs sm:text-sm text-[#ADB0B2] hover:text-white transition-all duration-200"
        >
          About
        </a>
        <a
          href="/project"
          className="text-xs sm:text-sm text-[#ADB0B2] hover:text-white transition-all duration-200"
        >
          Project
        </a>
        {/* 버튼 - 반응형 패딩 및 텍스트 */}
        <button className="relative group border rounded-3xl px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 overflow-hidden text-white text-xs sm:text-sm md:text-md shrink-0">
          <span className="relative z-10 whitespace-nowrap">
            <span className="hidden sm:inline">24기 지원하기</span>
            <span className="inline sm:hidden">지원하기</span>
          </span>
        </button>
      </nav>
    </header>
  );
};
