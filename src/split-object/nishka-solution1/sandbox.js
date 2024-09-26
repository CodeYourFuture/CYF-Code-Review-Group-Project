import { toSeparate } from './split-object';

let obj = {
  name: 'robs',
  age: 25,
  tall: true,
  userName: 'sbor',
};

console.log(toSeparate(obj));

// Expected result:
// [ { name: 'robs' },
// { age: 25 },
// { tall: true },
//  { userName: 'sbor' } ]

let obj2 = {
  firstName: 'Sal',
  lastName: 'Fullman',
  age: 26,
  userName: 'fullman_sal',
};

console.log(toSeparate(obj2));

// Expected result:
// [
//   { firstName: 'Sal' },
//   { lastName: 'Fullman' },
//   { age: 26 },
//   { userName: 'fullman_sal' }
// ]
