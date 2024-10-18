const cacheName = 'torquetrend-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/particles.json',
    '/manifest.json',
    '/f1.mp4.jpg',
    '/lithium-mine.jpg',
    '/waymo.jpg',
    '/car charging.jpg
    // Add other assets as needed
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(assetsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
