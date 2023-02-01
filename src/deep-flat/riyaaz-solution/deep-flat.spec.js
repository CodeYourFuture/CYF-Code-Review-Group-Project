import { flattenArray } from './deep-flat';

describe('flattenArray', () => {
  it('flattens a nested array', () => {
    const input = [1, [2, [3, 4], 5]];
    const output = [1, 2, 3, 4, 5];
    expect(flattenArray(input)).toEqual(output);
  });

  it('returns an empty array for an empty input', () => {
    expect(flattenArray([])).toEqual([]);
  });

  it('returns the original array if it is not nested', () => {
    const input = [1, 2, 3, 4, 5];
    expect(flattenArray(input)).toEqual(input);
  });

  it('flattens arrays with different levels of nesting', () => {
    const input = [1, [2, [3, 4], 5], [6, 7, [8, [9]]]];
    const output = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(flattenArray(input)).toEqual(output);
  });

  it('flattens arrays with different data types', () => {
    const input = [1, [2, 'three', 4], [{ five: 5 }, [6]]];
    const output = [1, 2, 'three', 4, { five: 5 }, 6];
    expect(flattenArray(input)).toEqual(output);
  });

  it('flattens arrays with different nested arrays of different lengths', () => {
    const input = [1, [2, [3, 4, 5], 6], [7, 8, 9, [10]]];
    const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(flattenArray(input)).toEqual(output);
  });
});
