import { checkDifference } from './difference';

describe('checkDifference', () => {
  it('removes values from an array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const valuesToRemove = [3, 4];
    const expectedResult = [1, 2, 5];
    expect(checkDifference(originalArray, valuesToRemove)).toEqual(
      expectedResult,
    );
  });
});
