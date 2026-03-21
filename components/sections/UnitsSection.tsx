import { units } from "@/data/units";
import UnitCard from "@/components/units/UnitCard";

export default function UnitsSection() {
  const studios = units.filter((u) => u.type === "studio");
  const tworooms = units.filter((u) => u.type === "tworoom");

  return (
    <section id="units" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">
          Units
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          세대 안내
        </h2>

        {/* 원룸 */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-700 mb-5 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-200 text-xs flex items-center justify-center font-bold text-slate-600">
              {studios.length}
            </span>
            원룸
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {studios.map((unit) => (
              <UnitCard key={unit.id} unit={unit} />
            ))}
          </div>
        </div>

        {/* 투룸 */}
        <div>
          <h3 className="text-lg font-semibold text-slate-700 mb-5 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-xs flex items-center justify-center font-bold text-blue-600">
              {tworooms.length}
            </span>
            투룸
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tworooms.map((unit) => (
              <UnitCard key={unit.id} unit={unit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
