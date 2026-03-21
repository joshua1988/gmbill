import { Building2, Stethoscope, BedSingle, BedDouble } from "lucide-react";

const FLOORS = [
  {
    floor: "1층",
    Icon: Stethoscope,
    label: "의료기 상가",
    desc: "의료 관련 상가 입점",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    iconColor: "bg-emerald-100 text-emerald-600",
  },
  {
    floor: "2층",
    Icon: BedDouble,
    label: "투룸 1세대 · 원룸 2세대",
    desc: "201호(투룸), 203·204호(원룸)",
    color: "bg-slate-50 border-slate-200 text-slate-700",
    iconColor: "bg-slate-100 text-slate-600",
  },
  {
    floor: "3층",
    Icon: BedDouble,
    label: "투룸 1세대 · 원룸 2세대",
    desc: "301호(투룸), 303·304호(원룸)",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    floor: "4층",
    Icon: BedDouble,
    label: "투룸 2세대",
    desc: "401호, 403호",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconColor: "bg-blue-100 text-blue-600",
  },
];

export default function FloorPlanSection() {
  return (
    <section id="floors" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">
          Floor Plan
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
          층 구성
        </h2>

        <div className="flex flex-col gap-3 max-w-2xl">
          {[...FLOORS].reverse().map(({ floor, Icon, label, desc, color, iconColor }) => (
            <div
              key={floor}
              className={`flex items-center gap-4 p-4 rounded-2xl border ${color}`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconColor}`}
              >
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">{floor}</span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
                <p className="text-xs opacity-70 mt-0.5">{desc}</p>
              </div>
              <Building2 size={16} className="opacity-30 shrink-0" />
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-400">
          * 세대 구성: 원룸 4개, 투룸 4개 (총 8세대)
        </p>
      </div>
    </section>
  );
}
