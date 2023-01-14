/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


self.fallback = async request => {
  // https://developer.mozilla.org/en-US/docs/Web/API/RequestDestination
  switch (request.destination) {
    case 'document':
      if (true) return caches.match("/pages/_offline.tsx", {
        ignoreSearch: true
      });
    case 'image':
      if (true) return caches.match("/assets/iamges/offline.svg", {
        ignoreSearch: true
      });
    case 'audio':
      if (false) {}
    case 'video':
      if (false) {}
    case 'font':
      if (false) {}
    case '':
      if (false) {}
    default:
      return Response.error();
  }
};
/******/ })()
;