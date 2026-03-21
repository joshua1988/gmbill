import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-white font-bold text-lg mb-4">광명빌</p>
        <div className="flex flex-col gap-2 text-sm">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-blue-400 shrink-0" />
            전북 전주시 덕진구 건지2길 9
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-blue-400 shrink-0" />
            <a href="tel:010-0000-0000" className="hover:text-white transition-colors">
              010-0000-0000
            </a>
          </span>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          © 2026 광명빌. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
