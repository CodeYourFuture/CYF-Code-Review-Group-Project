import { toSeparate } from './split-object';

describe('Split Object into array of Objects', () => {
  describe('splits object', () => {
    it('whole numbers', () => {
      const expected = [
        { firstName: 'Daniel' },
        { lastName: 'Lowell' },
        { class: 10 },
        { age: 15 },
      ];
      const received = toSeparate({
        firstName: 'Daniel',
        lastName: 'Lowell',
        class: 10,
        age: 15,
      });
      expect(received).toEqual(expected);
    });
  });
});
