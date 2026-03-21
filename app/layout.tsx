import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "광명빌 | 전북대병원 앞 신축 원룸·투룸",
  description:
    "전주 전북대병원 정문 도보 2분. 2026년 3월 리모델링 완공. 원룸 5세대·투룸 3세대. 에어컨·냉장고·세탁기·인덕션·옷장 모두 새것.",
  openGraph: {
    title: "광명빌 | 전북대병원 앞 신축 원룸·투룸",
    description:
      "전주 전북대병원 정문 도보 2분. 2026년 3월 리모델링 완공.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
