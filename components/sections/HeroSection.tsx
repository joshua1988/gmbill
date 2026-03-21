import { MapPin, Building2, Sparkles } from "lucide-react";

const BADGES = [
  { icon: MapPin, text: "전북대병원 도보 2분" },
  { icon: Sparkles, text: "2026년 신축 리모델링" },
  { icon: Building2, text: "원룸·투룸 8세대" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] mt-14 flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 py-14 md:py-20 text-white">
        <p className="text-blue-400 text-xs sm:text-sm font-medium tracking-wider mb-4">
          전북 전주시 덕진구 건지2길 9
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-5">
          광명빌
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-xl leading-relaxed">
          전북대병원 바로 앞,
          <br />
          <span className="text-white font-semibold">밝고 깨끗한 신축 원룸·투룸</span>
        </p>

        {/* 배지 */}
        <div className="flex flex-wrap gap-2 mb-10">
          {BADGES.map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm px-3 py-1.5 rounded-full"
            >
              <Icon size={13} className="text-blue-400 shrink-0" />
              {text}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#units"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors text-center"
          >
            세대 둘러보기
          </a>
          <a
            href="#map"
            className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-colors text-center"
          >
            오시는 길
          </a>
        </div>
      </div>
    </section>
  );
}
