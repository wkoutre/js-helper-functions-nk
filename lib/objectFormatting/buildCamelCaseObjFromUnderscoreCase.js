"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildCamelCaseObjFromUnderscoreCase = undefined;

var _stringFormatting = require("../stringFormatting");

const buildCamelCaseObjFromUnderscoreCase = (exports.buildCamelCaseObjFromUnderscoreCase = unformattedObj => {
  const builder = {};

  Object.keys(unformattedObj).forEach(key => {
    const value = unformattedObj[key];
    const isArray = value instanceof Array;
    const isObject = value instanceof Object && !isArray;

    if (isObject) {
      builder[
        (0, _stringFormatting.convertUnderscoreToCamelCase)(key)
      ] = buildCamelCaseObjFromUnderscoreCase(value);
    } else {
      builder[(0, _stringFormatting.convertUnderscoreToCamelCase)(key)] = value;
    }
  });

  return builder;
});
