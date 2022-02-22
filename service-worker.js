/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "91ff83f55f2d0c90e0c9ee7dea628cfd"
  },
  {
    "url": "assets/css/0.styles.478c0506.css",
    "revision": "012a5c858e330ad489a3f1d50931eec1"
  },
  {
    "url": "assets/img/image-20210910095710306.36b1a848.png",
    "revision": "36b1a8482902c5907995f32285ea46cb"
  },
  {
    "url": "assets/img/image-20210910095954923.5a7f7b98.png",
    "revision": "5a7f7b98878917c6d77e371e8719b65a"
  },
  {
    "url": "assets/img/image-20210914203952799.bd9e7b6c.png",
    "revision": "bd9e7b6c154af38466682cb12f77ee8a"
  },
  {
    "url": "assets/img/image-20210916110311011.427dd370.png",
    "revision": "427dd370944b0eb60c23b68201246d1f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2c517eb1.js",
    "revision": "607877cbf85d0868c7133889819da1e1"
  },
  {
    "url": "assets/js/11.6113ddbb.js",
    "revision": "14503cc3ce23f04e77e6906c60c42cd1"
  },
  {
    "url": "assets/js/12.f952eb3b.js",
    "revision": "65a723bfc4825213ec3c62ae68d3d4ea"
  },
  {
    "url": "assets/js/13.bef37712.js",
    "revision": "6748157df504c61d11470ce62a4a205a"
  },
  {
    "url": "assets/js/14.4ceabdfc.js",
    "revision": "9f24a72168f86bfa8bff7b3b13dbc44e"
  },
  {
    "url": "assets/js/15.857ae7b6.js",
    "revision": "4dad6faed427a4e0f2236c7e0ce15ed7"
  },
  {
    "url": "assets/js/2.5a3f500c.js",
    "revision": "ac694b8c857ef8b138b8bd51fb8f31f7"
  },
  {
    "url": "assets/js/3.ddaa0ef3.js",
    "revision": "5a4f0abea61ea9c93690e203ddf1325b"
  },
  {
    "url": "assets/js/4.2011b523.js",
    "revision": "3d76203aef3a46a8569fc914a75a0582"
  },
  {
    "url": "assets/js/5.2596d7f1.js",
    "revision": "ed8a2dceb08f97427ac83e34133f8317"
  },
  {
    "url": "assets/js/6.e68188bb.js",
    "revision": "be3b75c16544bcd3749453137eb0d1e1"
  },
  {
    "url": "assets/js/7.d12810ee.js",
    "revision": "5cb19bdb580f7f4700ec2e41d0c80f79"
  },
  {
    "url": "assets/js/8.42e9eab0.js",
    "revision": "9a9c335ca05a2b439fe620ead7c4e1a2"
  },
  {
    "url": "assets/js/9.6ee1159f.js",
    "revision": "ec7f1bf9e4bf1ef3db863123a0abe641"
  },
  {
    "url": "assets/js/app.be3aa3c4.js",
    "revision": "73140b07347153cef6e48d228be2df11"
  },
  {
    "url": "front.html",
    "revision": "bf687612c051581c843aab33091c1a96"
  },
  {
    "url": "frontend/Vue.html",
    "revision": "9a51cc5d9d3011ce69a90415781c048c"
  },
  {
    "url": "index.html",
    "revision": "38576c0fd8817d1020a7396e78328aa8"
  },
  {
    "url": "LeetCode笔记本.html",
    "revision": "b75dc04d8a9693a1883bd015f7315a66"
  },
  {
    "url": "rearend/spring.html",
    "revision": "edf2ae4da8305187f2e5d39694098d3c"
  },
  {
    "url": "rearend/springboot.html",
    "revision": "93af04025c49ca5c5b4ed0afb43c6d72"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
