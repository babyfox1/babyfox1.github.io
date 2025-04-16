'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dbb30a8ef4bba7ae380efaee79fe4857",
"version.json": "e924b0b901ddf7c01f29a88e8c721611",
"index.html": "1c98624b32cd56a8e0c57def729c6716",
"/": "1c98624b32cd56a8e0c57def729c6716",
"CNAME": "ea1e8533edd15ac1efd01af6f5943c30",
"main.dart.js": "b424efddfa4657350633483719931aa7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "14e1ba44c3e2001ba70d8981ea016ba5",
".git/ORIG_HEAD": "1104ae92e7e2a6ad249a8a19bbce8dcd",
".git/config": "6459de4d5088e7282571f6a3278aafcd",
".git/objects/92/b064ca01dcd5f38289e21828462422ea01edf6": "3584382b9113e845fe8cef6dd314aa72",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/f50ab4a27879475ff7b62baac04cfdc6aa80f9": "a5ce699c8fea1dc56cb5c56bd0430753",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/606504c5e57911e9a03eb84cceebd728aa4a90": "7b149ff360401809c2f2d7cedebc0a76",
".git/objects/3c/6ae104ae4a6cfb8c579819c39a34c85eac3ffd": "2651dd9f9f8dd6d7451df3c0fc971bd8",
".git/objects/3d/dc64764cdc549d398823bf44c153143850fefc": "d478d8f204adae2a9585ca0a4ab22c32",
".git/objects/67/2c2181b08ff8fca3edb6378fb4ab0fe1cddf71": "213c58b937ac354736bbf1be21bed19c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a3/502bcdbe7dbc99b1de490613b0a8b57cbf18c9": "aba6ce9506bb3f5f09ea0d8097623f23",
".git/objects/b5/0a11f68a5044e627c542ed334095364531ea5e": "fa755c50b58199f975f86792a5a9e470",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/29975aef74ee65f1036d47901ab922f509e6a0": "2cff7ef2067bdef38e4970020efdbcaf",
".git/objects/d9/d45bab84702461370d52c88abcf082045acfb8": "2e8599368863f9da0e95602a9197d550",
".git/objects/ad/b6b61147f9680c3f9a8d73a6acaa473bcab7f9": "c218e843f80cdfd3578f383c42344beb",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/a6bd70e8436c04672d932875a60ef4711cff03": "6b4464aa9c4ec84305fcaf8dd1d25562",
".git/objects/df/ef2d518f7a35a1ec325e0ce20ee7e6132d321a": "515d3f154a4ef14ebe3fdd662d7e0bd1",
".git/objects/da/453f537768b98719c230db6e8ac24921c40d20": "e46f26ea7fc2932894df249c8316fef5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/a3bd2f95421de85cd554da11aa24059da576a3": "b724b4422212387c37b11016f7c42bd4",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/f1e3d0e28fa2e63e130e2901d356b3694a3f0a": "010e0e2086f519b0f6510179740ada8e",
".git/objects/ee/bd7598109b4b975df23f5beca18dbf54f18ddb": "e5ba559aad86bc29c2a02cbc9b765e2a",
".git/objects/c9/17fd7d78aa23ca29456e12630e2ce5be3fddc7": "723fe0f75aa8c301712476c792b78f4d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3868acf14bdaa8f8aab697d93e3302939275b5": "543dda04d3c8ce5d51795feb9b25a557",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/656a504a40ad270736b537ffe1f9f8066ea155": "e06d4eefec7be240f77f8bdca1b5019c",
".git/objects/fe/5190bfffe58b861ef81d93ece5e6fc5958349c": "b270b2bae4691e96b727043c1a2da70a",
".git/objects/18/6e292e309c4d9072bda14229873d61e22d14e5": "5d62db2375b963c0b440cfd0e7d94d24",
".git/objects/27/926fdf6a315484f933e960454184d98b56d010": "b743ab8c90855e7ceb1c71169a1bf373",
".git/objects/27/c052376b47e3ab76c8eb2b87ac03682bff4abb": "d8c335d4769bc350e7c820daf8a4d02a",
".git/objects/7c/3eb94f18d0da20132a6fe18353815fe8d020e6": "4d3a6e6add6638d9304394d766ad6ec1",
".git/objects/73/a6e58c0ac2b2f01d6608ca299a2b716ca13c41": "1e1a13a2c49783f43c0c80730627dab4",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/017e7c656bd5194dd9c15dfe41060c66f69f48": "e0b50c37850110f7c394498aa7f2c9d7",
".git/objects/4c/ce0de8f2476f2e68b0999dffe5182eaaef8bd2": "47e10047775b031340187ab90949df61",
".git/objects/21/87d0ca0ae125dc76984700f8a4739ee1ad8908": "7dc708b8ed301042055b7d99b22b3bab",
".git/objects/75/0e982f3d01a125d7e1232e5b09c1425337afa0": "0b562e8131ad00c9527648ec352ecac6",
".git/objects/81/ea66a7857d06f59e73b31d3d1ce2ee1ceb2394": "4056589a580617389868b8cc65a9c021",
".git/objects/2f/b9ac25ac15ca7766c0b241c24086446337cf0e": "f619f6cf8049b72f7c4e0e167143a69b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/2b5bf279f6432d62efb73693213241464ee59d": "db2e9f1d504e71af58847f649a7e6fc9",
".git/objects/9a/4a5a6a64a02f0f7a699ee9db04935d5170f5d0": "729fef204ae2fdf5cd918d0ac75c6151",
".git/objects/36/9c6bdfcb76a421e9bb09979e5608cddda720fe": "0de9dd3a5d61b3f8f04339c56fb2a052",
".git/objects/91/18f96c43a350c94a314485718c69330f979c54": "19f59eb73e82f8d623e0387f7736f35d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/98add0d4912a02c3684c41758520009da32a00": "5c7ac7ab2e5e741be5335f17ea8fc7c0",
".git/objects/65/30745fabf0e5bf68eaa0209c8ed4d8ce65dc83": "a95fed8078bb88a3f8fa876fdea11a95",
".git/objects/3a/33d997e3768d4f8ce50501b42dfd97ac9c5763": "0c46e6861f99e2528feec4d4d6fbd93b",
".git/objects/53/cd03a756c7e1b290e19a64adf6d63f51f68e1e": "c4fade4ddc7416f41b83d6c49b815903",
".git/objects/3f/ddf806984d514a3715996efa5dcfd47014798f": "099e5defa05969d62ac6a40b3ae17049",
".git/objects/30/4b34fc3b6ce9f3cb5df50084402c2e6aaae2c4": "d3db62a7d10b79298505c4c825027309",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/97/d637f1264b2697026f884e7d4c47af637227e8": "d7e12f94798fb089ae9e60cafbd3bae0",
".git/objects/0f/fbd3bbded4fc07a33d69dc9d8ce6c7c73e987b": "456c81a17f3337028af98160ba6fa1e0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/de34dff374da8f1d3f11980b2e7799737360cc": "03cc71be4f018dba70b985436fb0aea6",
".git/objects/a0/0546bd5df05b366483a4ab5ab2c193f7428e37": "d4d5f227bf36d4de1e142f8939a77e1a",
".git/objects/a7/371dca4d7917018ef3558418d7e803c00c475f": "335df6a4ec835707beb6ac2a9c14963b",
".git/objects/dd/30c3fc75883e54284dc876a46ea6ff2707ec42": "99383d431e8206d386735d6f62de35f6",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/4a6a0242d97049f9d274e58e943d37a5babb50": "b743f41042e6a150ff981429c77835eb",
".git/objects/d5/79d257e4cdfca904e79ea9845b15557bae3b4e": "34d550129d65bc3f3bc15ffe6a49a91f",
".git/objects/aa/b4d79ade2709c2035e6e6f99e26a1f199300f1": "e6a789e7cfb352130c5160382efc0585",
".git/objects/aa/b2642e01e80a959d7b2e710b49c397b812f797": "c732d4cda5c671d7099acee564caee19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/bd2fd887f8d0313c97c53f74e1e0a420d2ca26": "c888df09c811376f3b8061f731f6d662",
".git/objects/db/fc137c113ef57295d502ca02a6a63e3e438ffe": "611bb8934d6eaf758dffaf4a7c265c9e",
".git/objects/a8/f84ecabd523e8330ad30ef3524c9b1578063cc": "8f1a4d90706c90bbb4e9de0f84f82f4a",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/59b38a97b851f93c5806e0b508f03fb351bb5a": "3b447113212f782713faaa5cf7344375",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/277966d2037a7c3811c9dc4718e0781e3a8f93": "7f73f6eeafe638ab380bb1b9dbccf210",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e6/1937ca8d04a6756a6c3c1e69568d8ffd28b182": "1ab0dde72a9bd68b958eb4365d1e620a",
".git/objects/f6/40de8c4fdddfe4bc20ac0170e4405aa39551f1": "c0fb8e7f53a438211efb8579ab8a8526",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/e254a7af002fdc740b02aeef2e2a4f10b25e2b": "4af98a907c5fcef52386457c30ad235d",
".git/objects/cb/be12f243e980400b54165076fa935e7ed9e6da": "832e78b0d74c24a4de327a8fc67bee94",
".git/objects/e0/7bd70b333b700bf973af6e76e4392ecfbfe885": "efe55bed465caef2fd6306c0cbe8377d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/5ada62d2cda7ac0ea6c6a46b7b84e28e036641": "d0afd59f48cbc0534a57ac033088ee11",
".git/objects/4a/e368bfcfc282bf955e9d41d1b33f09ae121a2c": "9cd97ad957593407609f72bb831a5ed8",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/9dcc47b1c26fe3b1bc10a57ea0fd6957fda828": "6941937e503bae273a04c151b0599ab4",
".git/objects/76/51e8b45d6df8acb800cccf19da2e3a6d45c949": "2ba581656f5b2475f00005fb4847694f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/1513fa6732f1e12dc7a259b1af4184077ad06b": "8e6cbb496ba33ff2c5c4ec91aac9e6bc",
".git/objects/78/b936f4dca3ce4546499ab202c9cc77d970b25c": "27fc6632ee28c97500ea4428cd67267c",
".git/objects/78/e2665b39eea2664ea1862bd4bcd20a275f6a30": "56ff001a7e8d872685551f9b95257803",
".git/objects/8b/d7ffcc9aac28bf57ed41e5ca9505c8b26f9c7a": "fd3a1501cd4e79e416e86b23185a0c3e",
".git/objects/7a/75c526b2e5cce43d17027b153573704f8d3b89": "4aefbe514c2ece47a7f9ce816202999f",
".git/objects/8e/e0a5c50fedae042a84741dc7b17c983e968cbb": "3bac2f4a8fea4e618e7d0571f9baf9e0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a8b3e1272c580904acec8710290caf8b",
".git/logs/refs/heads/main": "cdbfe171161f15ec615831b910fa8ef4",
".git/logs/refs/remotes/origin/main": "91e784bb48db97df35808ddc1c646bbd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9a5bea346e83f4dbb5fd9b4883cbc7f1",
".git/refs/remotes/origin/main": "9a5bea346e83f4dbb5fd9b4883cbc7f1",
".git/index": "b00a433af5e8a2bd74742ec5e08fb4c2",
".git/COMMIT_EDITMSG": "9a8150b1a630c8dbde316ecd93eca7b9",
".git/FETCH_HEAD": "55930699f8541163e15d0052118d70f1",
"assets/AssetManifest.json": "2eb184be66f26b4987f96b0f8b522398",
"assets/NOTICES": "1c79ddae08f426ccde82a56a5957b94f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "89c92bb8f6293dfbd0dcc35183e74a52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "53d4978d63e1e3c29fdd462a55e2a561",
"assets/fonts/MaterialIcons-Regular.otf": "d87e42f86a3fb3d26abb647023d47470",
"assets/assets/111.jpg": "331837e0d1e47bf9b028b2b6cdc1b143",
"assets/assets/22.jpg": "d5f1684081f718ce37e992037c52f2f7",
"assets/assets/1.webp": "ab5abc8d39582ea9cafed8e17f67ff2f",
"assets/assets/%25D0%25BB%25D0%25BE%25D0%25B3%25D0%25BE.jpeg": "3cbc31dce09ba63f063caeea1398b7f3",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
