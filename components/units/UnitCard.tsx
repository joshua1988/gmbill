import Link from "next/link";
import Image from "next/image";
import { Unit } from "@/types/unit";
import { TYPE_LABEL } from "@/data/units";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import AmenitiesIcons from "@/components/units/AmenitiesIcons";
import { ChevronRight } from "lucide-react";

interface UnitCardProps {
  unit: Unit;
}

export default function UnitCard({ unit }: UnitCardProps) {
  const mainImage = unit.images[0];

  return (
    <Link
      href={`/units/${unit.id}`}
      className="group block rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-blue-300 hover:shadow-lg transition-all"
    >
      {/* 이미지 영역 */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {mainImage.isPlaceholder ? (
          <PlaceholderImage label={mainImage.alt} className="w-full h-full" />
        ) : (
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* 타입 배지 */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
            unit.type === "tworoom"
              ? "bg-blue-600 text-white"
              : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          {TYPE_LABEL[unit.type]}
        </span>
      </div>

      {/* 정보 영역 */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-900">{unit.label}</h3>
          <ChevronRight
            size={16}
            className="text-slate-400 group-hover:text-blue-600 transition-colors"
          />
        </div>
        <AmenitiesIcons amenities={unit.amenities} size="sm" />
      </div>
    </Link>
  );
}
