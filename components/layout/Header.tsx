"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "건물 소개", href: "/#features" },
  { label: "세대 안내", href: "/#units" },
  { label: "층 구성", href: "/#floors" },
  { label: "오시는 길", href: "/#map" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-slate-900">
          광명빌
        </Link>

        {/* 데스크탑 */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:01066956225"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors"
          >
            문의하기
          </a>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-1 text-slate-600"
          aria-label="메뉴"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-slate-700 border-b border-slate-100 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:01066956225"
            className="mt-3 block text-center text-sm font-medium bg-blue-600 text-white py-2 rounded-full"
          >
            문의하기
          </a>
        </div>
      )}
    </header>
  );
}
