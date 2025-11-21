import Image from "next/image";

type HeaderVariant = "dark" | "light" | "gray";

interface HeaderProps {
  variant?: HeaderVariant;
}

const HEADER_VARIANTS = {
  dark: {
    background: "bg-bg-dark",
    logo: "/logo_full_black.svg",
    logoAlt: "APPTIVE",
    linkDefault: "text-text-secondary",
    linkHover: "hover:text-white",
    buttonText: "text-white",
    buttonBorderGradient: "#FF7900",
    //buttonBorderGradientHover: "#fff",
  },
  light: {
    background: "bg-white",
    logo: "/logo_full_black.svg",
    logoAlt: "APPTIVE",
    linkDefault: "text-text-primary",
    linkHover: "hover:text-text-secondary",
    buttonText: "text-text-primary",
    buttonBorderGradient: "text-text-primary",
    //buttonBorderGradientHover: "#000",
  },
  gray: {
    background: "bg-bg-gray",
    logo: "/logo_full_black.svg",
    logoAlt: "APPTIVE",
    linkDefault: "text-text-primary",
    linkHover: "hover:text-text-secondary",
    buttonText: "text-text-primary",
    buttonBorderGradient: "text-text-primary",
    //buttonBorderGradientHover: "#FF7900",
  },
} as const;

export const Header = ({ variant = "dark" }: HeaderProps) => {
  const styles = HEADER_VARIANTS[variant];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-50 py-3 md:py-4 ${styles.background} transition-colors duration-300`}
    >
      <div className="text-2xl font-bold shrink-0">
        <Image
          src={styles.logo}
          alt={styles.logoAlt}
          width={120}
          height={27}
          className="w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto"
          priority
        />
      </div>

      <nav className="flex items-center gap-3 sm:gap-5 md:gap-7 lg:gap-10">
        <a
          href="/about"
          className={`text-xs sm:text-sm ${styles.linkDefault} ${styles.linkHover} transition-all duration-200`}
        >
          About
        </a>
        <a
          href="/project"
          className={`text-xs sm:text-sm ${styles.linkDefault} ${styles.linkHover} transition-all duration-200`}
        >
          Project
        </a>

        <button
          className={`relative group border rounded-3xl px-3 sm:px-4 md:px-4 py-2 sm:py-2 overflow-hidden ${styles.buttonText} text-xs sm:text-sm md:text-[14px] shrink-0`}
        >
          <span className="relative z-10 whitespace-nowrap">
            <span className="hidden sm:inline">24기 지원하기</span>
            <span className="inline sm:hidden">지원하기</span>
          </span>
        </button>
      </nav>
    </header>
  );
};
