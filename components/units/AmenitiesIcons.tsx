import { AmenityKey } from "@/types/unit";
import { AMENITY_META } from "@/data/units";

interface AmenitiesIconsProps {
  amenities: AmenityKey[];
  size?: "sm" | "md";
}

export default function AmenitiesIcons({
  amenities,
  size = "md",
}: AmenitiesIconsProps) {
  const iconSize = size === "sm" ? 16 : 20;
  const textClass = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="flex flex-wrap gap-3">
      {amenities.map((key) => {
        const { label, Icon } = AMENITY_META[key];
        return (
          <div key={key} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Icon size={iconSize} className="text-blue-600" />
            </div>
            <span className={`${textClass} text-slate-600`}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
