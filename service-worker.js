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
    "revision": "8a5f425e96530fbcd87ee2ecea989a50"
  },
  {
    "url": "assets/css/0.styles.3905bb84.css",
    "revision": "163de45f04f2e96b3390109ed72438bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6a1f2f8.js",
    "revision": "20f8d9fa7016e9abfe9a4cd27d735925"
  },
  {
    "url": "assets/js/11.fce673de.js",
    "revision": "a699d13b91e19139daecb756b767daab"
  },
  {
    "url": "assets/js/12.26a5f560.js",
    "revision": "2f3d510da715f41d5fba7dbb27329d0c"
  },
  {
    "url": "assets/js/13.02678d53.js",
    "revision": "a1392480d0f606f39196b696095b1fb1"
  },
  {
    "url": "assets/js/14.630ad3d4.js",
    "revision": "3a93e66a1bc3f3bd371a9f59221e5321"
  },
  {
    "url": "assets/js/15.b5901fa4.js",
    "revision": "38401b396e6a330b3ccfef503183453c"
  },
  {
    "url": "assets/js/16.57c4b895.js",
    "revision": "6802190d59bb670f4a7a588bdd90c4a2"
  },
  {
    "url": "assets/js/17.d36e0244.js",
    "revision": "c7c6cbd1268ed3afacd6f65baf2371f0"
  },
  {
    "url": "assets/js/18.9773326e.js",
    "revision": "f6d44727cebfcec5d0839bbe84136d18"
  },
  {
    "url": "assets/js/19.df51683a.js",
    "revision": "95490ec0d0f2c6ab776a0190f7623bf7"
  },
  {
    "url": "assets/js/20.2023917a.js",
    "revision": "cef61cb35ec95e02d86b41b37d71a0f0"
  },
  {
    "url": "assets/js/21.07ae8e94.js",
    "revision": "30a0f7a092a522d289b59e327ee4e7ca"
  },
  {
    "url": "assets/js/22.aee4b08b.js",
    "revision": "e0fc037658dbdcf3dad3b2adbe121003"
  },
  {
    "url": "assets/js/23.0f881b51.js",
    "revision": "34fda92adaf1de89c4d2b4d33ebcb4ca"
  },
  {
    "url": "assets/js/24.da2c1d7f.js",
    "revision": "e47bfecbeb77adae2bcf3fad2952edc8"
  },
  {
    "url": "assets/js/25.238d0a91.js",
    "revision": "eb7890ee7dc7331c87b5d39090371c5a"
  },
  {
    "url": "assets/js/26.429efd8b.js",
    "revision": "ccfabe6beb4dc45aa829416c84c0c4fe"
  },
  {
    "url": "assets/js/27.4e69faca.js",
    "revision": "4ed80c27469b8e810102f2a99829303e"
  },
  {
    "url": "assets/js/28.ea41eb2c.js",
    "revision": "ce4918a0b7ff1d2bea7ed3b5478421af"
  },
  {
    "url": "assets/js/29.eb38f980.js",
    "revision": "d7665f9d2db9d5746f912e72143c31f2"
  },
  {
    "url": "assets/js/30.861306a4.js",
    "revision": "1daf67488fd305e88061201ec3b429c1"
  },
  {
    "url": "assets/js/31.51ff2772.js",
    "revision": "b12ede28c76ca2727146addcd56bf6f6"
  },
  {
    "url": "assets/js/32.906a9d26.js",
    "revision": "2d94f746351f43704888d5f7b3258054"
  },
  {
    "url": "assets/js/33.46629ea8.js",
    "revision": "123b16c2103451d9e3b6ad126a8eb368"
  },
  {
    "url": "assets/js/34.74fbb327.js",
    "revision": "4fa37d5e3c0e8f3cd0165a931300a27a"
  },
  {
    "url": "assets/js/35.cb57f554.js",
    "revision": "ba43b51b1c705d54d57dc33cc45b983c"
  },
  {
    "url": "assets/js/36.bb28fa41.js",
    "revision": "2305cb6f32d021f174525656a819d109"
  },
  {
    "url": "assets/js/37.d8790cc9.js",
    "revision": "6ecd1022ec653edb1378614a70d3ec14"
  },
  {
    "url": "assets/js/38.a080a14c.js",
    "revision": "743f6da6bc6b9b7096b80031d4371387"
  },
  {
    "url": "assets/js/4.85979883.js",
    "revision": "acde6ef850f6d0e09f4a2ef89e4488c1"
  },
  {
    "url": "assets/js/5.dfd352df.js",
    "revision": "c25378b9dc998ea7334a2824541183df"
  },
  {
    "url": "assets/js/6.249802e3.js",
    "revision": "f040a205034fd88f8f4e45dc0ecafc8f"
  },
  {
    "url": "assets/js/7.1e5f973a.js",
    "revision": "36e8fe9eb48a3292e51d6405c84bc1b7"
  },
  {
    "url": "assets/js/8.b7d849be.js",
    "revision": "6f4b7c8e1a9ce1e840380d3a77584c73"
  },
  {
    "url": "assets/js/9.f56536d9.js",
    "revision": "0f864682c7eb495c090b6118736888ae"
  },
  {
    "url": "assets/js/app.3ffa4c1e.js",
    "revision": "30364cec966ca6c1454fb829c23371c2"
  },
  {
    "url": "assets/js/vendors~flowchart.610e92a1.js",
    "revision": "cb8d7fe8928477bd9fbb5c3f3cb43eb6"
  },
  {
    "url": "assets/js/vendors~notification.3e916219.js",
    "revision": "cd40ddf3930af08e680126b2e6864a0c"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "fa1ac16caa603d357daa92b32519c05e"
  },
  {
    "url": "javaee/index.html",
    "revision": "34301a75b8ae13b8804759df7feeabed"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "52ff73a57fafbf42758ce9c25b74d7c5"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "8c13672a6d83ffc29705ce596726de0a"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "ec1ee291a829c5174744c79e03fc47a0"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "4b0bbb1236ec1f79a5a242653c722ee3"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "ba275af6790560153a04dc4c44001e21"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "6fcae50391af0daa55147f773754312f"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "88812883e74d04355007c6ef015ebf90"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "32aef320caaf143cbca1841ff58b7f40"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "81624570f30c82da305ba03942ee0796"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "54d04ca68b53634cee009dc7237c1ee6"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "cdb61e606ae7eb491f0c5772372dc8f7"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "5bdd5f4f2c095707e29cdd4192adb6ec"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "b44049656b7c76388db4efd75b4c244a"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "64b240910cfc809d25df53628cd5139c"
  },
  {
    "url": "javatool/build/maven/sidebar.html",
    "revision": "90dd5b6ba9c3345be3bb78290f4c2cf8"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "74904d705044a0bb97c476428929aab4"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "7bf991e016704c3037cea4cd2477142d"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "7ccd24f74efc8190a2583db6aecb4742"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "d539884b9b160ae6cc242943a287a4b9"
  },
  {
    "url": "javatool/index.html",
    "revision": "05be300cce386c18cf693694d13be848"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "ddc4abb06d1ded323f054d89e1298e4c"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "a8897bfdb53de3d6561222c22afe4a6e"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "623bc68df0ccb2eb470b26bf39af6b74"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "98ccb8204aecba4a765aa01a904aaa7f"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "fd1e447bd6b232cd6c757ef2bfa55b1e"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "faa8a46e8855e47f44485303c41aa1f0"
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
