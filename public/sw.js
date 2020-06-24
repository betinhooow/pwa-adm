var CACHE_NAME = 'otimigas-app';

var urlsToCache = [
    '/',
    'public/index.html',
    'public/assets/css/bootstrap.min.css',
    'public/assets/font-awesome/css/font-awesome.css',
    'public/assets/css/animate.css',
    'public/assets/css/style.css'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
}); 