import {
  Hospital,
  Sparkles,
  Palette,
  Package,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const FEATURES = [
  {
    Icon: Hospital,
    title: "전북대병원 도보 2분",
    desc: "정문에서 걸어서 2분 거리. 병원 관계자·학생에게 최적의 위치.",
  },
  {
    Icon: Sparkles,
    title: "2026년 3월 신축 리모델링",
    desc: "전기·배관부터 인테리어까지 전면 교체. 새집 그대로의 컨디션.",
  },
  {
    Icon: Palette,
    title: "화이트 톤 인테리어",
    desc: "밝고 넓어 보이는 화이트 톤 위주 디자인으로 쾌적한 생활 환경.",
  },
  {
    Icon: Package,
    title: "가전·가구 완비",
    desc: "에어컨·냉장고·세탁기·인덕션·옷장 모두 신품으로 제공.",
  },
  {
    Icon: ShieldCheck,
    title: "전층 CCTV 완비",
    desc: "건물 입구부터 각 층 복도까지 CCTV 설치로 안전한 주거 환경.",
  },
  {
    Icon: Headphones,
    title: "전문 관리인 운영",
    desc: "빠른 민원·불편 대응이 가능한 전문 관리인 체계로 운영.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">
          Special Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          광명빌만의 특징
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Icon size={20} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
