self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache =>
        cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './icons/icon-192.png',
          './icons/icon-512.png',
          // ajoute ici les fichiers CSS/JS/Leaflet dont tu dépends
        ])
      )
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });
  