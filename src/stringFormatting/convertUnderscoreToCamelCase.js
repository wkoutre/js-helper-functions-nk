export const convertUnderscoreToCamelCase = underscoredString => {
  let buildingStr = "";
  let i = 0;

  while (i < underscoredString.length) {
    if (underscoredString[i] === "_") {
      while (underscoredString[i] === "_") {
        i += 1;
      }

      if (underscoredString[i]) {
        if (buildingStr.length) {
          buildingStr += underscoredString[i].toUpperCase();
        } else {
          buildingStr += underscoredString[i];
        }
      }
    } else {
      buildingStr += underscoredString[i];
    }
    i += 1;
  }

  return buildingStr;
};
