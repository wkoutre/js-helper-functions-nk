const { convertUnderscoreToCamelCase } = require("../stringFormatting/");

const buildCamelCaseObjFromUnderscoreCase = unformattedObj => {
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

const testObj = {
  starts_at_hour: {
    beg_hour: "09",
    minute: "00",
    meridian: "PM",
    date_time: {
      start_time: "06",
      end_of_day: "17"
    },
    lunch_time: ["14", "21", 12]
  }
};

console.log(buildCamelCaseObjFromUnderscoreCase(testObj));

module.exports = { buildCamelCaseObjFromUnderscoreCase };
