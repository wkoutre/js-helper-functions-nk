"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringFormatting = require("./stringFormatting");

Object.keys(_stringFormatting).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _stringFormatting[key];
    }
  });
});

var _objectFormatting = require("./objectFormatting");

Object.keys(_objectFormatting).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _objectFormatting[key];
    }
  });
});

var _googlePlacesREST = require("./googlePlacesREST");

Object.keys(_googlePlacesREST).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _googlePlacesREST[key];
    }
  });
});