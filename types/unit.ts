export type UnitType = "studio" | "tworoom";

export type AmenityKey =
  | "air_conditioner"
  | "refrigerator"
  | "washing_machine"
  | "induction"
  | "wardrobe"
  | "desk"
  | "lighting"
  | "cctv";

export interface Unit {
  id: string;
  floor: number;
  type: UnitType;
  label: string;
  amenities: AmenityKey[];
  images: UnitImage[];
  description?: string;
  occupied?: boolean;
}

export interface UnitImage {
  src: string;
  alt: string;
  isPlaceholder: boolean;
}
