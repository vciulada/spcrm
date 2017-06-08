var cacheName = "helloWorld";
/*self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      '/js/script.js',
      '/images/hello.png'
    ]))
  );
});*/

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(response){
          if(!response||response.status !== 200){
            return response;
          }

          var responseToCache = response.clone();

          caches.open(cacheName)
          .then(function(cache){
            cache.put(event.request,responseToCache);
          });

          return response;
        }
      );
    }))
});
