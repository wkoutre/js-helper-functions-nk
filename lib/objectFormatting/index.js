"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buildCamelCaseObjFromUnderscoreCase = require("./buildCamelCaseObjFromUnderscoreCase.js");

Object.keys(_buildCamelCaseObjFromUnderscoreCase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _buildCamelCaseObjFromUnderscoreCase[key];
    }
  });
});