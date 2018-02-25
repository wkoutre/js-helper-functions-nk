import { convertUnderscoreToCamelCase } from "../stringFormatting";

export const buildCamelCaseObjFromUnderscoreCase = unformattedObj => {
  const builder = {};

  Object.keys(unformattedObj).forEach(key => {
    const value = unformattedObj[key];
    const isArray = value instanceof Array;
    const isObject = value instanceof Object && !isArray;

    if (isObject) {
      builder[
        convertUnderscoreToCamelCase(key)
      ] = buildCamelCaseObjFromUnderscoreCase(value);
    } else {
      builder[convertUnderscoreToCamelCase(key)] = value;
    }
  });

  return builder;
};
