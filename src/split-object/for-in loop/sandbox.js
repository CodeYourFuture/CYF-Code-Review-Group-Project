import { objectToArray } from './split-object.js';

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

console.log(objectToArray(person));
//[
//   { firstName: 'John' },
//   { lastName: 'Doe' },
//   { age: 50 },
//   { eyeColor: 'blue' }
// ]
const myHonda = {
  color: 'red',
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

console.log(objectToArray(myHonda));
// [
//   { color: 'red' },
//   { wheels: 4 },
//   { engine: { cylinders: 4, size: 2.2 } }
// ]
