'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5692f0c9abcc08cc9dd67a8b4641cee4",
"assets/AssetManifest.bin.json": "ba390d1c6385f92b0363e361b90fae79",
"assets/AssetManifest.json": "fa3179f23a661412bc72da088d45e5fc",
"assets/assets/animations/Logo.json": "6203eeb32f97bc0cd8ce1533509813f6",
"assets/assets/animations/MrSquareCorrect.json": "9b4d27a12035d1ab4c1acb6e5d760a8c",
"assets/assets/animations/MrSquareCrying.json": "e112134b44c14cf82a4dae7916f16906",
"assets/assets/animations/MrSquareFire1.json": "77daf72e72850ecc1b16caaa887669f4",
"assets/assets/animations/MrSquareFire2.json": "b59402b5aabbd26958d732a6a29b24e3",
"assets/assets/animations/MrSquareHi.json": "3e759cadd41e34542776f46915496aca",
"assets/assets/animations/MrSquareIncorrect.json": "f4714fd5f54e764cf8f8a420151f08b3",
"assets/assets/animations/MrSquareProfile.json": "0a102bfd3b5ab63b5cce56609b1a79de",
"assets/assets/animations/MrSquareSalom.json": "fbbe8b4a274d8f7e8082e5673e1ce476",
"assets/assets/animations/MrSquareStartButton.json": "7d1aa9baa4506743bb75727d4cb95e42",
"assets/assets/animations/MrSquareStreak.json": "3cef1c04eaedcfdc794de26b683acc48",
"assets/assets/animations/MrSquareStrong.json": "d45ed250d4a1b9f338df7efd0cb8047e",
"assets/assets/animations/MrSquareWaiting.json": "1f000ea1101d2b5e68cfb85450b09ba0",
"assets/assets/animations/piramids1.json": "915f15468436f9d5d3e3599ef051b6f8",
"assets/assets/animations/piramids2.json": "df1cbcea839f50def83aed7f99d5c5eb",
"assets/assets/animations/SquareCastle.json": "818a580f0b85aa9d445e20d6f1f0354a",
"assets/assets/animations/SquareCastle1.json": "90eed0a85d1cd4171dfee6fef1d99bd3",
"assets/assets/fonts/BerlinSans.ttf": "b6539b6d3432c623d8d4f9cc2a29589e",
"assets/assets/icons/ArifmeticStorm.png": "75c4ab51eb3014192604ddd48319829b",
"assets/assets/icons/Diamond.png": "c01ea38a5885b82ad3d32c43fac6ab89",
"assets/assets/icons/Exit.png": "d09afb04955abe5edbb2141b8275275d",
"assets/assets/icons/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/icons/Heart.png": "f2a9dfba479f844b0f46ba81429c53ab",
"assets/assets/icons/HeartInfinity.png": "2ca0c491cc7b723ab28816a43a93be3a",
"assets/assets/icons/Home.png": "d04cabd9a90120a8218c70116374da6c",
"assets/assets/icons/Lightining.png": "d379b2a0667710a9da5c163e383ec6a9",
"assets/assets/icons/Logo.png": "d7f9e2f0b5fa19fb1b6f42db3b239f54",
"assets/assets/icons/LogoScreen.png": "0716bc25412704f6094f44cec0622a12",
"assets/assets/icons/PremiumIcon.png": "af105ebad12bc71f4fa70c9400aab229",
"assets/assets/icons/Profile.png": "405a0d6492022b490d2d79c2c991a91e",
"assets/assets/icons/Ring.png": "44b4ec86967ec3164ee085d41b5363c2",
"assets/assets/icons/Store.png": "3988faa48893b347d9747db3dfb4a7dc",
"assets/assets/icons/StormInfinity.png": "f63d64aee0026813372f148b3289bb5c",
"assets/assets/icons/StormTime.png": "a7fd6573b0cf26d700719d0c274f8117",
"assets/assets/images/1.png": "7865169b1cc7dc98b50ac308ee19bc0b",
"assets/assets/images/1progress.png": "e7f2c2147cb01c209bad6a3527c522e1",
"assets/assets/images/2.png": "efa8eae27ece2f9cf51e66d829a9276b",
"assets/assets/images/2progress.png": "82a91c590beb659ad274a43952899af5",
"assets/assets/images/3.png": "e9af79e35cdc5169863b436f6400225a",
"assets/assets/images/3progress.png": "f5d455759d65cf1d930fdbcc3fccd9c0",
"assets/assets/images/4.png": "513cb301b48eb5d470fec0aede6463c6",
"assets/assets/images/4progress.png": "a9778470512ce101a5e0f09b9af6cc86",
"assets/assets/images/5.png": "062dc7ada75dd99b3be97a9606ed8e81",
"assets/assets/images/5progress.png": "86646f6313484f02dd42f0b5de474cec",
"assets/assets/images/KvadratQasri.png": "90b3c6308c0c24dfa0fa7aeaf4ec2909",
"assets/assets/images/MathStorm.png": "072970fef1005cac81468baa499f1096",
"assets/assets/images/MrCircleBanner.png": "ff2637923b99ff9ce3d767c294dc58d1",
"assets/assets/images/MrSquareBanner.png": "b5e936851f4b956c107ff751efda6a99",
"assets/assets/images/MrSquareBoxBanner.png": "e91581e45155af1c7b42f78b5312bea0",
"assets/assets/images/MrTriangleBanner.png": "5aadda3db617b138110f1033d07e8547",
"assets/assets/images/MrTriangleBoxBanner.png": "cb64ecb88144c9601006ec08200c1ff5",
"assets/assets/images/PremiumAlochiInfinity.png": "116307abaf0a53c568c36971a6698de2",
"assets/assets/images/UchburchakPiramidasi.png": "0180255169d24b9335b5c29b5cf3e1b0",
"assets/assets/images/Welcome1.png": "c8086b8ba10d2e93a06b0a31ab279e51",
"assets/assets/images/Welcome2.png": "f1bf923cc2a335297fce48871255b63d",
"assets/assets/images/Welcome3.png": "e8c90a8f683f7c0598104cca3812558e",
"assets/assets/items/MrCircleBox.png": "62b1da5c3208a84c35d20201c94ea80d",
"assets/assets/items/MrSquareBoost.png": "b8549166fac3d1f58759c962c63be3f4",
"assets/assets/items/MrSquareBox.png": "0baf6cf3bb0f3533395712f240f90fa0",
"assets/assets/items/MrSquareTime.png": "42ab5714debe5098b833d8c1780034e0",
"assets/assets/items/MrTriangleBoost.png": "838bafb41746449164050585e8cf4fe6",
"assets/assets/items/MrTriangleBox.png": "7043a042b17d25fd28de5084dcef9c39",
"assets/assets/items/MrTriangleTime.png": "0c85614388ca5b46face95b5e0c0f985",
"assets/assets/items/SandiqHeart.png": "3a78945a89419d7ecca42456eb0b8030",
"assets/assets/items/SavatHeart.png": "9dda30ff390fc03ac92705ef50f59f60",
"assets/assets/medals/LockMedal.png": "0f3951bfa63945e7ace4b614df4eb8fa",
"assets/assets/medals/MrCircleTimer.png": "c2cc7bf2440f11cab6aa815ae0412a7f",
"assets/assets/medals/MrSquareMedal.png": "e198c6dbec67a8e9ff8183b17d89eebc",
"assets/assets/medals/MrTriangleLightining.png": "cdde583ecc3a6815cbc23e1646971a44",
"assets/assets/question2_images/10coin.png": "61a0a4b3758ff6e1ed8ecf53441a29a0",
"assets/assets/question2_images/1coin.png": "76cc8a076e7a1879d7de7cb6c888c9c5",
"assets/assets/question2_images/1figure(correct).png": "859569d97c0f6811c4993bfd86b0e51d",
"assets/assets/question2_images/1figure(selected).png": "c107e0274868174bde9467f0a49f7431",
"assets/assets/question2_images/1figure.png": "de820c011076ceed22fb56a5f5b8cf92",
"assets/assets/question2_images/1strawberry.png": "a95120afd35efc9a21689e137f86c8bc",
"assets/assets/question2_images/20coin.png": "f2e12450f26ecfbeea69fd8ae2b3efe7",
"assets/assets/question2_images/2coin.png": "e7e219877a3888715d1ee75013b52aff",
"assets/assets/question2_images/2figure(selected).png": "f2160ce448311d6ad502d274750a33df",
"assets/assets/question2_images/2figure(wrong).png": "03e02546249d04f55e29a2f137db4d20",
"assets/assets/question2_images/2figure.png": "f87944b267bb3a1cc87001bb9335e44c",
"assets/assets/question2_images/2strawberry.png": "7761cf9eb76fa9c0b47c309a111c9cb6",
"assets/assets/question2_images/3figure(correct).png": "5ca7b7e8d390668e4cc3a90f9b1e77c3",
"assets/assets/question2_images/3figure(selected).png": "f555ac17d0c211ca7b44c491ea95c8b6",
"assets/assets/question2_images/3figure.png": "aecca82cea6567fb3c28bbd86cff37d9",
"assets/assets/question2_images/4figure(selected).png": "dc31f2f544a42d706a2e0f73b41cd9dd",
"assets/assets/question2_images/4figure(wrong).png": "21eb404a24deacc8cdcfd22ba9f279ac",
"assets/assets/question2_images/4figure.png": "12d8e8758e2445bae230fd9990130700",
"assets/assets/question2_images/5coin.png": "61d31ab24d4220a38fd62082ff778524",
"assets/assets/question2_images/basketball.png": "dfec322ef4fb445bea3b310481208aa7",
"assets/assets/question2_images/Burger.png": "54eeda5548ca8548236da16402f72e10",
"assets/assets/question2_images/coin1.png": "879d1db98bec99d89ea53b5477fab156",
"assets/assets/question2_images/coin10.png": "e44fcf359d825d61852afe9d83182ef1",
"assets/assets/question2_images/coin2.png": "54e0f7f70781263d6898a8d949cb7298",
"assets/assets/question2_images/coin5.png": "6d2b4aac527cc58299e1a150f6661003",
"assets/assets/question2_images/football.png": "431fb7920f7b600686f5561f9857fd2c",
"assets/assets/question2_images/IceCream.png": "711b7120287884856eaadd7ee9ce483e",
"assets/assets/question2_images/Q13.png": "27c76d1e88ee6a4e545f71b3278b32e6",
"assets/assets/question2_images/Q13_1(selected).png": "464a928d5cadaa840fc5cd4fcc9df1b4",
"assets/assets/question2_images/Q13_1(wrong).png": "d8391fc824f3b9d3298019bf87a596c4",
"assets/assets/question2_images/Q13_1.png": "df64f58f74cffdef55654d612c476ee7",
"assets/assets/question2_images/Q13_2(selected).png": "667558336c7ee7413a59f61e2f236f56",
"assets/assets/question2_images/Q13_2(wrong).png": "3923a52ac8276dfaffc86c5bc0e9a97d",
"assets/assets/question2_images/Q13_2.png": "f7114e74d069a86536c361c402feb3c4",
"assets/assets/question2_images/Q13_3(selected).png": "36b9d19a5f121f225383ff77c4e765a9",
"assets/assets/question2_images/Q13_3(wrong).png": "8da6d714035966faaa2c2aae36cdcf72",
"assets/assets/question2_images/Q13_3.png": "f3fd9a64a1fb349615451ae92f8cd28a",
"assets/assets/question2_images/Q13_4(correct).png": "f689e1a1e3daacffae07f74e89d7a1a0",
"assets/assets/question2_images/Q13_4(selected).png": "231ba223c8a17e946073acc2fbea01fc",
"assets/assets/question2_images/Q13_4.png": "7b15154b4c62d36dc9fc6e1f4aa5e280",
"assets/assets/question2_images/Q16.png": "58dcd7175fb8232909534118ede7806a",
"assets/assets/question_images/Burger.png": "8c4756b7f83953451d293f52bb8213bc",
"assets/assets/question_images/Cheese.png": "7c3a781cd45c9cbe070ee6df2927e815",
"assets/assets/question_images/Grape.png": "c127d865fc194161c60cced2c0e92646",
"assets/assets/question_images/IceCream1.png": "a762d2674e5776ffedc9934f691d00ed",
"assets/assets/question_images/IceCream2.png": "1389208d16791cf60a11623ba8e9ed50",
"assets/assets/question_images/knight.png": "ffc602c4e1879dbab7cf67662d479fa1",
"assets/assets/question_images/Pizza.png": "adb35d5be1632a73ab3cd2a21fc33a7e",
"assets/assets/question_images/Q1.png": "8a6ccd4ed81baf548074077f3e2293b5",
"assets/assets/question_images/Q10.png": "3bbc0c4d247f5442c1c1e83b46981a45",
"assets/assets/question_images/Q2(1).png": "1d5047224ca7bf9a6b60f3d28c66761d",
"assets/assets/question_images/Q2(2).png": "6d72babcb087416787e7283f87ebfeeb",
"assets/assets/question_images/Q6.png": "ddca251a370e7e1d7f985d98b5abcdd1",
"assets/assets/question_images/Q7(circleDefault).png": "002066c349fcca831862f337a1a48c2b",
"assets/assets/question_images/Q7(circleIncorrect).png": "4be2d1e4f623602c9d73466f73b35a05",
"assets/assets/question_images/Q7(circleSelected).png": "fd4c4dc0be56d338181dfa8680fb47f1",
"assets/assets/question_images/Q7(fiveDefault).png": "36c5286d37fab45826b4bf5c1ede25d7",
"assets/assets/question_images/Q7(fiveIncorrect).png": "a23e1c7a85c5e7bb72d2968909e98d3b",
"assets/assets/question_images/Q7(fiveSelected).png": "a9f7ec0e1f615a9420a7452a2cb1d838",
"assets/assets/question_images/Q7(squareDefault).png": "f62f43b8704575ad6db90d99347c6fa4",
"assets/assets/question_images/Q7(squareIncorrect).png": "71c4fa84956e27b137471568ff780631",
"assets/assets/question_images/Q7(squareSelected).png": "20dd598623d51e7fb932e8534b116d5a",
"assets/assets/question_images/Q7(triangleCorrect).png": "5cb8c3fb9e8769ffa5b1aa9bf0b8e0d7",
"assets/assets/question_images/Q7(triangleDefault).png": "75e090415e6278a9236e84ac087f196a",
"assets/assets/question_images/Q7(triangleSelected).png": "02b4ab2568c95d5e746a7809845d6ba5",
"assets/assets/question_images/Strawberry.png": "406ae48a25d49bd80d1d0471673065f6",
"assets/FontManifest.json": "435ca1e5119a2b6dd8c662f4962b3f9d",
"assets/fonts/MaterialIcons-Regular.otf": "c435204e30b4c81af968be86c479e110",
"assets/NOTICES": "12b31dcef27e78bea96976f0a3322e3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3907ba9a23495d0bb87c2db50b78f661",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aefda09f2fb367d6fe62b8481f5a7b84",
"/": "aefda09f2fb367d6fe62b8481f5a7b84",
"main.dart.js": "6d68c79690eef25a0ba22234ff94ae2c",
"manifest.json": "4654213d370581c6a0062ac087a4504d",
"splash/img/dark-1x.png": "f522dea6563f145896f8c6e0b06ae26c",
"splash/img/dark-2x.png": "9d5cd9f9ee25c8645698bcf36c423020",
"splash/img/dark-3x.png": "357305f7b6d10fd1ebc05a90f38f88e9",
"splash/img/dark-4x.png": "a1e757748929105db23b3f87ce478cf2",
"splash/img/light-1x.png": "f522dea6563f145896f8c6e0b06ae26c",
"splash/img/light-2x.png": "9d5cd9f9ee25c8645698bcf36c423020",
"splash/img/light-3x.png": "357305f7b6d10fd1ebc05a90f38f88e9",
"splash/img/light-4x.png": "a1e757748929105db23b3f87ce478cf2",
"version.json": "e07b10ec1e0b7322fd52ef2d0c517dc6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
