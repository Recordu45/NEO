const CACHE_NAME = "neo-v2";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./student.html",
    "./banker.html"
];

self.addEventListener("install", (event) => {

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_FILES))
    );

    self.skipWaiting();
});


self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys().then((cacheNames) => {

            return Promise.all(

                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))

            );

        })

    );

    self.clients.claim();
});


self.addEventListener("fetch", (event) => {

    event.respondWith(

        fetch(event.request)
            .then((response) => {

                const copy = response.clone();

                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, copy);
                    });

                return response;

            })
            .catch(() => {

                return caches.match(event.request);

            })

    );

});
