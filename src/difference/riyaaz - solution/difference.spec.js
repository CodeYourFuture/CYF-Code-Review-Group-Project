import { checkDifference } from './difference.js';

describe('checkDifference', () => {
  it('removes values from an array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const valuesToRemove = [3, 4];
    const expectedResult = [1, 2, 5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('returns an empty array when all elements are removed', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const valuesToRemove = [1, 2, 3, 4, 5];
    const expectedResult = [];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('returns the same array when no elements are removed', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const valuesToRemove = [];
    const expectedResult = [1, 2, 3, 4, 5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('removes duplicates from original array', () => {
    const originalArray = [1, 2, 2, 3, 3, 4, 5];
    const valuesToRemove = [2, 3];
    const expectedResult = [1, 4, 5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('removes elements from original array when valuesToRemove has duplicates', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const valuesToRemove = [2, 2, 3, 3, 4];
    const expectedResult = [1, 5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('returns the same array for non-integer elements', () => {
    const originalArray = ['a', 'b', 'c', 'd', 'e'];
    const valuesToRemove = [];
    const expectedResult = ['a', 'b', 'c', 'd', 'e'];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('removes elements from original array for non-integer elements', () => {
    const originalArray = ['a', 'b', 'c', 'd', 'e'];
    const valuesToRemove = ['b', 'd'];
    const expectedResult = ['a', 'c', 'e'];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  describe('checkDifference', () => {
    it('removes values from an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const valuesToRemove = [3, 4];
      const expectedResult = [1, 2, 5];
      expect(checkDifference(originalArray, valuesToRemove)).toEqual(
        expectedResult,
      );
    });

    it('returns an empty array when all values are removed', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const valuesToRemove = [1, 2, 3, 4, 5];
      const expectedResult = [];
      expect(checkDifference(originalArray, valuesToRemove)).toEqual(
        expectedResult,
      );
    });

    it('returns the original array when no values are removed', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const valuesToRemove = [];
      const expectedResult = [1, 2, 3, 4, 5];
      expect(checkDifference(originalArray, valuesToRemove)).toEqual(
        expectedResult,
      );
    });

    it('returns the original array when no values are present in the second array to remove', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const valuesToRemove = [6, 7, 8, 9, 10];
      const expectedResult = [1, 2, 3, 4, 5];
      expect(checkDifference(originalArray, valuesToRemove)).toEqual(
        expectedResult,
      );
    });

    it('returns an empty array when both arrays are empty', () => {
      const originalArray = [];
      const valuesToRemove = [];
      const expectedResult = [];
      expect(checkDifference(originalArray, valuesToRemove)).toEqual(
        expectedResult,
      );
    });

    it('returns an empty array when original array is empty', () => {
      const originalArray = [];
      const valuesToRemove = [1, 2, 3, 4, 5];
      const expectedResult = [];
      expect(checkDifference(originalArray, valuesToRemove)).toEqual(
        expectedResult,
      );
    });

    it('returns the original array when the second array is empty', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const valuesToRemove = [];
      const expectedResult = [1, 2, 3, 4, 5];
      expect(checkDifference(originalArray, valuesToRemove)).toEqual(
        expectedResult,
      );
    });

    it('correctly removes duplicates', () => {
      const originalArray = [1, 2, 2, 3, 4, 4, 5, 5];
      const valuesToRemove = [2, 4];
      const expectedResult = [1, 3, 5, 5];
      expect(checkDifference(originalArray, valuesToRemove)).toEqual(
        expectedResult,
      );
    });
  });

  it('returns the original array for arrays with only 1 element', () => {
    const originalArray = [1];
    const valuesToRemove = [2];
    const expectedResult = [1];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('returns the original array when removing elements not in original array', () => {
    const originalArray = [1, 2, 3];
    const valuesToRemove = [4, 5, 6];
    const expectedResult = [1, 2, 3];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('removes only the specified values from the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const valuesToRemove = [2, 4];
    const expectedResult = [1, 3, 5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('correctly handles arrays of different lengths', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const valuesToRemove = [1, 2, 3];
    const expectedResult = [4, 5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('handles arrays with negative numbers', () => {
    const originalArray = [-1, -2, -3, 4, 5];
    const valuesToRemove = [-1, -2];
    const expectedResult = [-3, 4, 5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });

  it('handles arrays of decimals', () => {
    const originalArray = [0.5, 1.5, 2.5, 3.5, 4.5];
    const valuesToRemove = [0.5, 1.5];
    const expectedResult = [2.5, 3.5, 4.5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });
});
