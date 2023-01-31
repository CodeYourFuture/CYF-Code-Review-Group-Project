export const checkDifference = (arr1, arr2) => {
  const result = arr1.filter((el) => !arr2.includes(el));
  return result;
};
