export const toSeparate = (object) => {
  const array = [];
  const keys = Object.keys(object);
  keys.forEach((key) => {
    array.push({
      [key]: object[key],
    });
  });
  return array;
};
