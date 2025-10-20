// Install event — caching your app files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('camu-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        // list of all HTML pages you want cached:
        '/activity.html',
        '/announcement.html',
        '/attendance.html',
        '/cafeteria.html',
        '/clearance.html',
        '/enrollment.html',
        '/examschedule.html',
        '/feedback.html',
        '/holiday.html',
        '/institution.html',
        '/leave.html',
        '/messages.html',
        '/portfolio.html',
        '/profile.html',
        '/progress_report.html',
        '/project.html',
        '/reports.html',
        '/result.html',
        '/services.html',
        '/timetable.html',
        '/anshika dwivedi.jpg',
        '/goggle logo.jpg',
        '/MY PIC.jpg'
      ]);
    })
  );
});

// Fetch event — serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
