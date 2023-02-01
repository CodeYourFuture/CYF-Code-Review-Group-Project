import { objectToArray } from './split-object.js';

describe('Object to Array', () => {
  it('Converts an object to an array', () => {
    const input = { name: 'John', age: 30 };
    const expectedOutput = [{ name: 'John' }, { age: 30 }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles an empty object', () => {
    const input = {};
    const expectedOutput = [];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts a complex object to an array', () => {
    const input = { name: 'John', age: 30, hobbies: ['reading', 'traveling'] };
    const expectedOutput = [{ name: 'John' }, { age: 30 }, { hobbies: ['reading', 'traveling'] },
    ];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles a numeric object', () => {
    const input = { 1: 'one', 2: 'two', 3: 'three' };
    const expectedOutput = [{ 1: 'one' }, { 2: 'two' }, { 3: 'three' }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles an object with nested objects', () => {
    const input = { name: 'John', details: { age: 30, city: 'New York' } };
    const expectedOutput = [{ name: 'John' }, { details: { age: 30, city: 'New York' } },];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });
});
