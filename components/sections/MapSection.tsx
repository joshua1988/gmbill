import { MapPin, Clock, Bus } from "lucide-react";
import NaverMap from "@/components/map/NaverMap";

const ACCESS_INFO = [
  {
    Icon: MapPin,
    label: "주소",
    value: "전북 전주시 덕진구 건지2길 9",
  },
  {
    Icon: Clock,
    label: "전북대병원 정문까지",
    value: "도보 약 2분",
  },
  {
    Icon: Bus,
    label: "대중교통",
    value: "건지로 버스 정류장 인근",
  },
];

export default function MapSection() {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">
          Location
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
          오시는 길
        </h2>

        <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
          <NaverMap />

          <div className="space-y-4">
            {ACCESS_INFO.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-slate-800">{value}</p>
                </div>
              </div>
            ))}

            <a
              href="https://naver.me/xUZDVqR2"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-medium text-blue-600 border border-blue-200 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              네이버 지도에서 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
