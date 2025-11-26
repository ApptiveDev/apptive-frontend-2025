import "@/styles/globals.css";
import "@/styles/reset.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/pretendard/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/pretendard/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/pretendard/Pretendard-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

const suit = localFont({
  src: [
    {
      path: "../assets/fonts/pretendard/SUIT-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../assets/fonts/pretendard/SUIT-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/pretendard/SUIT-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/pretendard/SUIT-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/fonts/pretendard/SUIT-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-suit",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${suit.variable}`}>
      <body className={pretendard.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
