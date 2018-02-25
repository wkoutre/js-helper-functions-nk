"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _convertUnderscoreToCamelCase = require("./convertUnderscoreToCamelCase");

Object.keys(_convertUnderscoreToCamelCase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _convertUnderscoreToCamelCase[key];
    }
  });
});

var _capitalizeStr = require("./capitalizeStr");

Object.keys(_capitalizeStr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _capitalizeStr[key];
    }
  });
});