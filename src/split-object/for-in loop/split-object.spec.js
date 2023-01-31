const testObject = {
  name: 'John',
  age: 30,
  city: 'London',
};
//test object
const expectedOutput = [{ name: 'John' }, { age: 30 }, { city: 'London' }];
//we call the splitObjectIntoArray() function with the test object, and we save the result to a variable.
const result = splitObjectIntoArray(testObject);
//test checks if the length of the result array is equal to the length of the expected output array.
console.assert(
  result.length === expectedOutput.length,
  'Array length is incorrect',
);
//test loops through both arrays, and for each iteration, checks if the current key-value pair in both arrays is equal.
for (let i = 0; i < result.length; i++) {
  console.assert(
    result[i][Object.keys(result[i])[0]] ===
    expectedOutput[i][Object.keys(expectedOutput[i])[0]],
    'Key value pair is incorrect',
  );
}
