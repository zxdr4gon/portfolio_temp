/*
  Service worker: makes the portfolio installable and usable offline.

  - Page, styles, and scripts: network first, so edits pushed to GitHub show up
    right away; the cached copy is used when offline or the network is slow.
  - Images, icons, and fonts: cache first, since they rarely change.

  Bump VERSION when you change the files listed in SHELL (or this file) to
  clear old caches for returning visitors.
*/
const VERSION = "v1";
const CACHE = `portfolio-${VERSION}`;
const SHELL = [
  "./",
  "index.html",
  "styles.css",
  "config.js",
  "theme.js",
  "app.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/favicon-48.png",
  "icons/icon-192.png",
  "icons/apple-touch-icon.png"
];
const NETWORK_TIMEOUT_MS = 3000;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("portfolio-") && key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

const put = async (request, response) => {
  if (!response || !(response.ok || response.type === "opaque")) return;
  const cache = await caches.open(CACHE);
  await cache.put(request, response);
};

const networkFirst = async (request, fallbackUrl) => {
  const network = fetch(request).then((response) => {
    put(request, response.clone());
    return response;
  });
  network.catch(() => {});
  const timeout = new Promise((resolve) => setTimeout(resolve, NETWORK_TIMEOUT_MS));
  try {
    const response = await Promise.race([network, timeout]);
    if (response) return response;
  } catch { /* offline: fall through to cache */ }
  const cached = await caches.match(request, { ignoreSearch: true }) || (fallbackUrl && await caches.match(fallbackUrl));
  return cached || network;
};

const cacheFirst = async (request) => {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  put(request, response.clone());
  return response;
};

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, "index.html"));
    return;
  }
  if (url.origin === self.location.origin) {
    if (request.destination === "image" || url.pathname.includes("/icons/")) event.respondWith(cacheFirst(request));
    else event.respondWith(networkFirst(request));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(cacheFirst(request));
  }
});
