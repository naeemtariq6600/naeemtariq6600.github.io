'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "af5d6170df1e97882f2ef43e1d696196",
"index.html": "53f8e4e8cb59ba2995c0a124084366d6",
"/": "53f8e4e8cb59ba2995c0a124084366d6",
"main.dart.js": "8a4a4180ce47c3b90833c4be4c188630",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "efb91036c2841bc331197bd47ac196b0",
"assets/AssetManifest.json": "c5298df565dbbab05af451cd220df938",
"assets/NOTICES": "9abbb7b429d0e8391f2e7c38ab208135",
"assets/env": "c984424d7f3fb688079c6d882025f1c7",
"assets/FontManifest.json": "91dfba77b16ac6756869e771294cc1d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/fonts/ubuntu-medium.ttf": "785d8031758d1fac400213600066aee6",
"assets/fonts/Lato-Black.ttf": "1233fdf19c04333c7f58af4eb8698452",
"assets/fonts/ubuntu_medium.ttf": "785d8031758d1fac400213600066aee6",
"assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/fonts/sans_serif_regular.otf": "2901db1208590ca9d5d926945a21ed82",
"assets/fonts/sans_serif_semi_bold.otf": "233d44963375e256fd3f1a6764050ca4",
"assets/fonts/billy_ohio.ttf": "8ac7b6311d6ab875405ffe1c4de0c686",
"assets/fonts/SansSerifFLF.otf": "2901db1208590ca9d5d926945a21ed82",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/user_profile.jpg": "49f5fdd4d5992f4ef8bb05411d7023a6",
"assets/assets/images/login_screen_icon.png": "0d6c4746de5acca34e2104d36cfbdd70",
"assets/assets/images/web/web_login_background.png": "fb56df33b2e31a662c04fa8a04f47405",
"assets/assets/images/splash_icon.png": "82a881282335f160a97cb7272edd7282",
"assets/assets/images/user_icon_.png": "e516710220469e36f79190613687dc2a",
"assets/assets/images/mobile/profile_image_place_holder.png": "c1092d593284050ec44fea9828347218",
"assets/assets/images/user_place_holder.png": "8b07a7bf1909010adf8fc57384f29a46",
"assets/assets/images/25.png": "d1a4217eda1e1cbb6f14f9bf40ac894a",
"assets/assets/images/biocos_splash_icon.png": "3acb20c7f6846dd9a7cd7824700660ef",
"assets/assets/icons/asm_credit_notes_icon.png": "f4151d7ad53763a6cd53fe945d83f8e8",
"assets/assets/icons/menu_dashbord.svg": "76b25370789736af76c189edff70593e",
"assets/assets/icons/customers_icon.png": "a6069c18323d5930d51217c15544ebf0",
"assets/assets/icons/ledger_icon.png": "a0368385ce389e7fbaafbf14e3798007",
"assets/assets/icons/orders_icon.png": "b9288c47c9519b11eda5f81eb202a73f",
"assets/assets/icons/home_icon.png": "5d716008c8135d1e7189a88a6755b8d2",
"assets/assets/icons/share_icon.png": "46f3562891254e6f29a4a4de58ce8534",
"assets/assets/icons/search_icon.png": "53dd51732d9c7c51f7728978ca7b88b1",
"assets/assets/icons/dead_sd_icon.png": "8332491cbc03072d073f9bb22fdcdaf1",
"assets/assets/icons/asm_schedule_icon.png": "d0d3a89cc3c8b2b8818fc84cefdbac65",
"assets/assets/icons/product_summary_icon.png": "0274146db418f40811cac2856e579d6b",
"assets/assets/icons/polygon.png": "4b9dde99cf4e966ba26415201b5826c6",
"assets/assets/icons/banks_icon.png": "f7be1a205cfbeeafee29b183c6c61df2",
"assets/assets/icons/asms_icon.png": "2e1732ab65843de707efea19a7d9b86e",
"assets/assets/icons/debit_notes_icon.png": "49ab34e85e8804846f7c85e4dd2f7888",
"assets/assets/icons/sale_return_icon.png": "feb73b820bc198701c497f136056bc78",
"assets/assets/icons/bell_icon.png": "5dc47ba7a7c153f852bdfdcfca97e906",
"assets/assets/icons/asm_orders_icon.png": "eed10f9599940f589d690515f5671726",
"assets/assets/icons/stock_icon.png": "4fbf2ed2b636e4ac18211f12d591cdf3",
"assets/assets/icons/all_sd_icon.png": "9c64584172b12779585d7200d2b991d4",
"assets/assets/icons/asm_sale_return_icon.png": "9ff0c2d59ac740e576774ee71dfe584b",
"assets/assets/icons/dispatch_orders_icon.png": "90be5bfff59cd9cdfba8fe632c9dea07",
"assets/assets/icons/payments_icon.png": "9a2c57ed4338e874a6517d72be41bd8a",
"assets/assets/icons/products_icon.png": "ac0de44d28c36630509bedeead062cf2",
"assets/assets/icons/users_icon.png": "a92942c305c17659d033ce71df283f8f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
