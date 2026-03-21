import { AmenityKey, Unit, UnitType } from "@/types/unit";
import {
  AirVent,
  Refrigerator,
  WashingMachine,
  Flame,
  Shirt,
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
  cctv: { label: "CCTV", Icon: AirVent }, // placeholder — 아이콘 없어서 대체
};

const ALL_AMENITIES: AmenityKey[] = [
  "air_conditioner",
  "refrigerator",
  "washing_machine",
  "induction",
  "wardrobe",
];

function makePlaceholderImages(label: string): Unit["images"] {
  return [{ src: "", alt: label, isPlaceholder: true }];
}

export const units: Unit[] = [
  // 2층
  {
    id: "201",
    floor: 2,
    type: "studio",
    label: "201호 원룸",
    amenities: ALL_AMENITIES,
    images: makePlaceholderImages("201호 전경"),
  },
  {
    id: "202",
    floor: 2,
    type: "studio",
    label: "202호 원룸",
    amenities: ALL_AMENITIES,
    images: makePlaceholderImages("202호 전경"),
  },
  // 3층
  {
    id: "301",
    floor: 3,
    type: "studio",
    label: "301호 원룸",
    amenities: ALL_AMENITIES,
    images: makePlaceholderImages("301호 전경"),
  },
  {
    id: "302",
    floor: 3,
    type: "tworoom",
    label: "302호 투룸",
    amenities: ALL_AMENITIES,
    images: makePlaceholderImages("302호 전경"),
  },
  {
    id: "303",
    floor: 3,
    type: "tworoom",
    label: "303호 투룸",
    amenities: ALL_AMENITIES,
    images: makePlaceholderImages("303호 전경"),
  },
  // 4층
  {
    id: "401",
    floor: 4,
    type: "studio",
    label: "401호 원룸",
    amenities: ALL_AMENITIES,
    images: makePlaceholderImages("401호 전경"),
  },
  {
    id: "402",
    floor: 4,
    type: "studio",
    label: "402호 원룸",
    amenities: ALL_AMENITIES,
    images: makePlaceholderImages("402호 전경"),
  },
  {
    id: "403",
    floor: 4,
    type: "tworoom",
    label: "403호 투룸",
    amenities: ALL_AMENITIES,
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
