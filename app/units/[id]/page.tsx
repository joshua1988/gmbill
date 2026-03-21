import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { units, TYPE_LABEL } from "@/data/units";
import { getUnitById } from "@/data/units";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import AmenitiesIcons from "@/components/units/AmenitiesIcons";
import { ArrowLeft, Phone } from "lucide-react";

export function generateStaticParams() {
  return units.map((unit) => ({ id: unit.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = getUnitById(id);
  if (!unit) return {};
  return {
    title: `${unit.label} | 광명빌`,
    description: `전북 전주 덕진구 전북대병원 앞 광명빌 ${unit.label}. 에어컨·냉장고·세탁기·인덕션·옷장 완비.`,
  };
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = getUnitById(id);
  if (!unit) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 pt-20 pb-16">
        {/* 뒤로 가기 */}
        <Link
          href="/#units"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          세대 목록으로
        </Link>

        {/* 헤더 */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            {unit.label}
          </h1>
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              unit.type === "tworoom"
                ? "bg-blue-100 text-blue-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {TYPE_LABEL[unit.type]}
          </span>
        </div>

        {/* 이미지 갤러리 */}
        <div className="rounded-2xl overflow-hidden mb-8">
          {unit.images[0].isPlaceholder ? (
            <PlaceholderImage
              label={unit.images[0].alt}
              className="w-full aspect-[4/3]"
            />
          ) : (
            <div className="grid gap-2">
              {unit.images.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 가전·가구 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            가전·가구
          </h2>
          <div className="p-5 bg-slate-50 rounded-2xl">
            <AmenitiesIcons amenities={unit.amenities} size="md" />
          </div>
        </div>

        {/* 건물 공통 특징 */}
        <div className="mb-10 p-5 rounded-2xl border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            공통 시설
          </h2>
          <ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside">
            <li>건물 전층 CCTV 설치</li>
            <li>전문 관리인 운영</li>
            <li>전북대병원 정문 도보 2분</li>
          </ul>
        </div>

        {/* CTA */}
        <a
          href="tel:01066956225"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-colors"
        >
          <Phone size={18} />
          입주 문의하기
        </a>
      </div>
    </main>
  );
}
