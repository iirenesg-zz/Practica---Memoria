importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/style.css",
    "revision": "9efc497ac62931906562138d4080b01b"
  },
  {
    "url": "img/back.png",
    "revision": "b22085a469c301f4c04b16dae59a8b71"
  },
  {
    "url": "img/cards-150w.png",
    "revision": "142740d1b66bb92b5ad62be23d5f2879"
  },
  {
    "url": "img/cards-65w.png",
    "revision": "322dcd5ad10b65dab6e972e51a9a9ce3"
  },
  {
    "url": "img/cards-85w.png",
    "revision": "e1919968927b8b785cbc253cf10a777c"
  },
  {
    "url": "img/display.png",
    "revision": "eb4290d19c4bca4abb8d6e1692a9e4f0"
  },
  {
    "url": "img/logo2.png",
    "revision": "d4ac9bea677f8c99ea0713e6e14cdbb6"
  },
  {
    "url": "index.html",
    "revision": "d0d72225ab1911911939c6b6da84529d"
  },
  {
    "url": "js/script.js",
    "revision": "eb587107053ddbbcf4d1a098c3e09a51"
  },
  {
    "url": "data/game-icon-2x.png",
    "revision": "51bcf0a4ca14758b97189ef5763b2445"
  },
  {
    "url": "data/game-icon-3x.png",
    "revision": "ddb299e5218e4e4e9e42d61f4e3d111a"
  },
  {
    "url": "data/game-icon-4x.png",
    "revision": "94184713024ec923e5e1c94242446b2f"
  },
  {
    "url": "data/manifest.json",
    "revision": "1272346e9219bc99069875955458cca5"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
