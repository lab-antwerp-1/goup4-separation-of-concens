import { removeItemFromArray } from './remove-item.js';

describe('Remove a specific item from an array.', () => {
  describe('standard case', () => {
    it('letter element', () => {
      const array = ['a', 'b', 'c'];
      const item = 'a';
      const expected = ['b', 'c'];
      expect(removeItemFromArray(item, array)).toEqual(expected);
    });
    it('number element', () => {
      const array = ['1', '2', '3'];
      const item = '1';
      const expected = ['2', '3'];
      expect(removeItemFromArray(item, array)).toEqual(expected);
    });
    it('element with punctuation', () => {
      const array = ['a!', 'b?', 'c.'];
      const item = 'a!';
      const expected = ['b?', 'c.'];
      expect(removeItemFromArray(item, array)).toEqual(expected);
    });
  });

  describe('edge cases', () => {
    it('array is empty', () => {
      const array = [];
      const item = 'a';
      const expected = [];
      expect(removeItemFromArray(item, array)).toEqual(expected);
    });
    it('not include the item', () => {
      const array = ['a', 'b', 'c'];
      const item = 'd';
      const expected = '"d" is not included in the array';
      expect(removeItemFromArray(item, array)).toEqual(expected);
    });
  });
});
