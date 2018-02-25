"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const capitalizeStr = exports.capitalizeStr = str => {
  const copy = str.split("").map(i => i.toLowerCase());

  copy[0] = copy[0].toUpperCase();

  return copy.join("");
};