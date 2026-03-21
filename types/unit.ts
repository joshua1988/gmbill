export type UnitType = "studio" | "tworoom";

export type AmenityKey =
  | "air_conditioner"
  | "refrigerator"
  | "washing_machine"
  | "induction"
  | "wardrobe"
  | "cctv";

export interface Unit {
  id: string;
  floor: number;
  type: UnitType;
  label: string;
  amenities: AmenityKey[];
  images: UnitImage[];
  description?: string;
}

export interface UnitImage {
  src: string;
  alt: string;
  isPlaceholder: boolean;
}
