import { Camera } from "lucide-react";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
}

export default function PlaceholderImage({
  label,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-slate-100 text-slate-400 ${className}`}
    >
      <Camera size={32} className="mb-2" />
      <p className="text-xs font-medium">촬영 준비 중</p>
      {label && <p className="text-xs mt-0.5 opacity-70">{label}</p>}
      <p className="text-xs mt-1 opacity-50">2026년 4월 업데이트 예정</p>
    </div>
  );
}
