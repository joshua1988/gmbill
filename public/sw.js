const CACHE_NAME = 'gmbill-v1';
const STATIC_ASSETS = [
  '/manifest.json',
  '/favicon.ico',
];

// 설치 시 정적 자산 캐시
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

// 활성화 시 기존 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// 캐시 우선, 네트워크 폴백 전략 (정적 랜딩 페이지)
self.addEventListener('fetch', (event) => {
  // GET 요청만 캐싱
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request).then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      });

      return cached || networkFetch;
    }),
  );
});
