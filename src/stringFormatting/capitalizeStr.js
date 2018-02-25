export const capitalizeStr = str => {
  const copy = str.split("").map(i => i.toLowerCase());

  copy[0] = copy[0].toUpperCase();

  return copy.join("");
};
