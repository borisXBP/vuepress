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
    "revision": "4b12ba74b850e4f5e3c0279cd99e0654"
  },
  {
    "url": "assets/css/0.styles.ed757401.css",
    "revision": "6c72a1147cd1106b5655e793f3668697"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/install-fail.eaefe945.png",
    "revision": "eaefe94555ea6a4891f444705c7943be"
  },
  {
    "url": "assets/img/solve-install-fail.e4e15522.png",
    "revision": "e4e15522a69ff35e3c1842e51b33086a"
  },
  {
    "url": "assets/js/1.9a47cbc2.js",
    "revision": "3fd4f442e6a864f6c7a53e3b2b0cf8f4"
  },
  {
    "url": "assets/js/10.dac8c4e9.js",
    "revision": "49c56d7241e37d9143c862bd4275df18"
  },
  {
    "url": "assets/js/11.b8f03d43.js",
    "revision": "4326175d81b19fd92c4996650f42311c"
  },
  {
    "url": "assets/js/12.5afd6715.js",
    "revision": "1cf049a78d5cb92eaab6c97e81c62e51"
  },
  {
    "url": "assets/js/13.25aefc8a.js",
    "revision": "0b84da23af6c273f91f3b1bfc3786cfa"
  },
  {
    "url": "assets/js/14.d3c9a4f6.js",
    "revision": "51a6dc842542dd6a092238107b5d677f"
  },
  {
    "url": "assets/js/15.d60025ca.js",
    "revision": "c27de9897035ea3536fa95af63c4abe0"
  },
  {
    "url": "assets/js/16.b39f1427.js",
    "revision": "db1ad8e83aceecde77a5d53044d7df7c"
  },
  {
    "url": "assets/js/17.3d1a950b.js",
    "revision": "2742cb5880b2753604f2285cd4329d83"
  },
  {
    "url": "assets/js/18.2be28ec8.js",
    "revision": "14af9137f9080391d7b236a6913e8263"
  },
  {
    "url": "assets/js/19.ca4da25f.js",
    "revision": "4d725d8cf60661b70c29a7bff2e80dfe"
  },
  {
    "url": "assets/js/20.1b7fba51.js",
    "revision": "f90e0b40e371c97243c4fb1682e5122a"
  },
  {
    "url": "assets/js/21.e4ae6cd7.js",
    "revision": "0595b3260610c74e17c455c385e8c01d"
  },
  {
    "url": "assets/js/22.80e01786.js",
    "revision": "3459d5bb92e69a3f268e2f2adc860f1a"
  },
  {
    "url": "assets/js/23.3462b0a5.js",
    "revision": "6be6ffa6536f7fb37b9e23b346d9b5ed"
  },
  {
    "url": "assets/js/24.a03abd7e.js",
    "revision": "6732c11ac6e4a7d48634739c802197d0"
  },
  {
    "url": "assets/js/25.67842841.js",
    "revision": "87af6eb40d2f4b725bc193f30c31785d"
  },
  {
    "url": "assets/js/26.137fb899.js",
    "revision": "f465b98e33c9fb15371251cfa1b37cce"
  },
  {
    "url": "assets/js/27.31bdbe5b.js",
    "revision": "877f91ef1cb7ab15ba285f4bfd7b39bb"
  },
  {
    "url": "assets/js/28.90a7fa2e.js",
    "revision": "3824de4e320b83ec8ae2ebfef0767d8e"
  },
  {
    "url": "assets/js/29.83526646.js",
    "revision": "b3f548a003d4b1792871aa32c274ddf0"
  },
  {
    "url": "assets/js/30.b15362d0.js",
    "revision": "47021639b980092662c96bc6476572b4"
  },
  {
    "url": "assets/js/31.7e1110c4.js",
    "revision": "0325d29996fc8cd64355b758f2a485d6"
  },
  {
    "url": "assets/js/32.5154eaec.js",
    "revision": "35298cb34fdcc8f1c370fce3e5bd4c37"
  },
  {
    "url": "assets/js/33.68e62237.js",
    "revision": "bed1cbb4167a153b884c05a43c11dd21"
  },
  {
    "url": "assets/js/34.ac058ef3.js",
    "revision": "af7ee70f25ffae889dcf9a08ad597c56"
  },
  {
    "url": "assets/js/4.360921fb.js",
    "revision": "dbd099a61c6efe950d1edf7c0862c55e"
  },
  {
    "url": "assets/js/5.ad8f7275.js",
    "revision": "0b702eac142e330a6f7aedd0dd6c3a43"
  },
  {
    "url": "assets/js/6.e63d7de5.js",
    "revision": "168bec103ae668329e50a3adee518bec"
  },
  {
    "url": "assets/js/7.556d4d3e.js",
    "revision": "0012d0aa8dc8eea32c506a8405ff3ad0"
  },
  {
    "url": "assets/js/8.581e252e.js",
    "revision": "b85907b226b91e902ad623af1f52bfec"
  },
  {
    "url": "assets/js/9.594f5a1e.js",
    "revision": "661b1561949920530758bfc72f2666d5"
  },
  {
    "url": "assets/js/app.b2450843.js",
    "revision": "5bcdd43f5cad431f683f5907dc218b11"
  },
  {
    "url": "assets/js/vendors~flowchart.8a4d07b6.js",
    "revision": "dcd8c2f61d8f7ccc5bccc36e567c3f91"
  },
  {
    "url": "backend/node/index.html",
    "revision": "24db59e17f4ebad4a451f3937ab9d2c7"
  },
  {
    "url": "backend/node/install-package-fail/index.html",
    "revision": "16898d221ae6f1750db02ba577aa6dbc"
  },
  {
    "url": "backend/node/switch-install-source/index.html",
    "revision": "76607f68bd2a6e1a83f53dfa22d60b19"
  },
  {
    "url": "categories/index.html",
    "revision": "2de7d11af0b6ba57deac482eb9afe5eb"
  },
  {
    "url": "css/style.css",
    "revision": "5db6f4f6c0c89016d61a52d2123e1b50"
  },
  {
    "url": "fontend/CSS/index.html",
    "revision": "e88273dd37d5e70d8bcd4c41744b6d3f"
  },
  {
    "url": "fontend/JavaScript/index.html",
    "revision": "b890e5b917e4a39325c8de5ab6ab51d2"
  },
  {
    "url": "fontend/前端框架/index.html",
    "revision": "b8c6aff0aabe3d657db211d220ebacb4"
  },
  {
    "url": "fontend/前端算法/index.html",
    "revision": "ebc000de27a2bd81f6d2241d6b867403"
  },
  {
    "url": "fontend/开发工具/index.html",
    "revision": "3790607be0472c8896ece63f88161732"
  },
  {
    "url": "fontend/网址收藏/index.html",
    "revision": "59a0337f3c63023c0f2fdaba8087b14d"
  },
  {
    "url": "handbook/angular/index.html",
    "revision": "cdac347a93346f56f8e4b3df6633440c"
  },
  {
    "url": "handbook/ConditionalTypes/index.html",
    "revision": "918da7a2c0f26f068a3032be74c40fa3"
  },
  {
    "url": "handbook/Generics/index.html",
    "revision": "5d1581abcfd93c0299d47ea3c741cc49"
  },
  {
    "url": "handbook/nginx/index.html",
    "revision": "9034968c7b5b35d417033e2cee033a32"
  },
  {
    "url": "handbook/react/index.html",
    "revision": "043a2563c48d956ade2cb9e022f46ac9"
  },
  {
    "url": "handbook/vue3/index.html",
    "revision": "68f510559813ea0586010259bedb7b6f"
  },
  {
    "url": "handbook/webpack/index.html",
    "revision": "56c56ac92ea42662a529c163e8e67232"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "301d0b10842f4ed4bf7360fb7a7807c3"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "301d0b10842f4ed4bf7360fb7a7807c3"
  },
  {
    "url": "icons/icp.png",
    "revision": "6e26aed5ced63bc60524cc736611d39e"
  },
  {
    "url": "icons/msapplication-icon.png",
    "revision": "301d0b10842f4ed4bf7360fb7a7807c3"
  },
  {
    "url": "images/boris.png",
    "revision": "301d0b10842f4ed4bf7360fb7a7807c3"
  },
  {
    "url": "index.html",
    "revision": "c9b53cf63cec9cd21d4c654590e20ee6"
  },
  {
    "url": "interview/index.html",
    "revision": "3f9af7058c13bb7a8a17fde9fcc83632"
  },
  {
    "url": "js/setglobal.js",
    "revision": "e0566dd142f9c33db1654633b236da2e"
  },
  {
    "url": "tag/index.html",
    "revision": "15a9ff2ee3b06bb5a974477e9d44e934"
  },
  {
    "url": "timeline/index.html",
    "revision": "7a7bec8b1ef1e5b791ba1c369fad6a07"
  },
  {
    "url": "最新文章/boris/index.html",
    "revision": "bb2441ee810efc0226c2b26e724d5cd9"
  },
  {
    "url": "最新文章/index.html",
    "revision": "60d8063b03caf8541b8aba0eddf08696"
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
