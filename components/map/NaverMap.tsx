"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const LAT = 35.8441545;
const LNG = 127.1412477;

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = () => {
    if (!mapRef.current || typeof naver === "undefined") return;

    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(LAT, LNG),
      zoom: 17,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(LAT, LNG),
      map,
      title: "광명빌",
    });
  };

  useEffect(() => {
    // 스크립트가 이미 로드된 경우 (페이지 재방문)
    if (typeof naver !== "undefined") {
      initMap();
    }
  });

  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="w-full h-72 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
        지도를 표시하려면 NEXT_PUBLIC_NAVER_MAP_CLIENT_ID를 설정해 주세요.
      </div>
    );
  }

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <div ref={mapRef} className="w-full h-72 rounded-2xl overflow-hidden" />
    </>
  );
}
