import { AmenityKey, Unit, UnitType } from "@/types/unit";
import {
  AirVent,
  Refrigerator,
  WashingMachine,
  Flame,
  Shirt,
  NotebookPen,
  Lamp,
  LucideIcon,
} from "lucide-react";

export const AMENITY_META: Record<
  AmenityKey,
  { label: string; Icon: LucideIcon }
> = {
  air_conditioner: { label: "에어컨", Icon: AirVent },
  refrigerator: { label: "냉장고", Icon: Refrigerator },
  washing_machine: { label: "세탁기", Icon: WashingMachine },
  induction: { label: "인덕션", Icon: Flame },
  wardrobe: { label: "옷장", Icon: Shirt },
  desk: { label: "책상", Icon: NotebookPen },
  lighting: { label: "조명", Icon: Lamp },
  cctv: { label: "CCTV", Icon: AirVent }, // placeholder — 아이콘 없어서 대체
};

const STUDIO_AMENITIES: AmenityKey[] = [
  "air_conditioner",
  "refrigerator",
  "washing_machine",
  "induction",
  "wardrobe",
];

const TWOROOM_AMENITIES: AmenityKey[] = [
  ...STUDIO_AMENITIES,
  "desk",
  "lighting",
];

function makePlaceholderImages(label: string): Unit["images"] {
  return [{ src: "", alt: label, isPlaceholder: true }];
}

export const units: Unit[] = [
  // 2층
  {
    id: "201",
    floor: 2,
    type: "tworoom",
    label: "201호 투룸",
    amenities: TWOROOM_AMENITIES,
    images: makePlaceholderImages("201호 전경"),
  },
  {
    id: "203",
    floor: 2,
    type: "studio",
    label: "203호 원룸",
    amenities: STUDIO_AMENITIES,
    images: makePlaceholderImages("203호 전경"),
    occupied: true,
  },
  {
    id: "204",
    floor: 2,
    type: "studio",
    label: "204호 원룸",
    amenities: STUDIO_AMENITIES,
    images: makePlaceholderImages("204호 전경"),
    occupied: true,
  },
  // 3층
  {
    id: "301",
    floor: 3,
    type: "tworoom",
    label: "301호 투룸",
    amenities: TWOROOM_AMENITIES,
    images: makePlaceholderImages("301호 전경"),
  },
  {
    id: "303",
    floor: 3,
    type: "studio",
    label: "303호 원룸",
    amenities: STUDIO_AMENITIES,
    images: makePlaceholderImages("303호 전경"),
    occupied: true,
  },
  {
    id: "304",
    floor: 3,
    type: "studio",
    label: "304호 원룸",
    amenities: STUDIO_AMENITIES,
    images: makePlaceholderImages("304호 전경"),
  },
  // 4층
  {
    id: "401",
    floor: 4,
    type: "tworoom",
    label: "401호 투룸",
    amenities: TWOROOM_AMENITIES,
    images: makePlaceholderImages("401호 전경"),
  },
  {
    id: "403",
    floor: 4,
    type: "tworoom",
    label: "403호 투룸",
    amenities: TWOROOM_AMENITIES,
    images: makePlaceholderImages("403호 전경"),
  },
];

export const TYPE_LABEL: Record<UnitType, string> = {
  studio: "원룸",
  tworoom: "투룸",
};

export function getUnitById(id: string): Unit | undefined {
  return units.find((u) => u.id === id);
}
