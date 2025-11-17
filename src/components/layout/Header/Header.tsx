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
    <header className="flex items-center justify-between px-50 py-4 bg-[#282A2E]">
      <div className="text-2xl font-bold">
        <Image src={logoImage} alt={logoAlt} width={180} height={40} priority />
      </div>

      <nav className="flex items-center gap-9">
        <a
          href="/about"
          className="text-sm text-[#ADB0B2] hover:text-white transition-all duration-200 "
        >
          About
        </a>
        <a
          href="/project"
          className="text-sm text-[#ADB0B2] hover:text-white transition-all duration-200 "
        >
          Project
        </a>
        <button className="relative group rounded-3xl px-6 py-2 overflow-hidden text-white text-md">
          <div className="absolute inset-0 rounded-3xl p-[2px] border animate-border-rotate group-hover:bg-[conic-gradient(from_var(--border-angle),##FF7900,transparent_360deg)]"></div>
          <div className="absolute inset-[2px] rounded-3xl bg-[#282A2E]"></div>

          <span className="relative z-10">24기 지원하기</span>
        </button>
      </nav>
    </header>
  );
};
