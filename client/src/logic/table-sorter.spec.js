import { tableSorter } from './table-sorter.js';

describe('sorts the strings in an array in different ways', () => {
  describe('oldest to newest', () => {
    it('empty array', () => {
      expect(tableSorter([], 'old')).toEqual([]);
    });
    it('3 items', () => {
      expect(tableSorter(['a', 'b', 'c'], 'old')).toEqual(['c', 'b', 'a']);
    });
    it('4 items', () => {
      const expected = ['a', 'b', 'c', 'd'];
      expect(tableSorter(['d', 'c', 'b', 'a'], 'old')).toEqual(expected);
    });
  });
  describe('newest to oldest', () => {
    it('empty array', () => {
      expect(tableSorter([], 'new')).toEqual([]);
    });
    it('3 items', () => {
      expect(tableSorter(['a', 'b', 'c'], 'new')).toEqual(['a', 'b', 'c']);
    });
    it('4 items', () => {
      const expected = ['d', 'c', 'b', 'a'];
      expect(tableSorter(['d', 'c', 'b', 'a'], 'new')).toEqual(expected);
    });
  });
  describe('alphabetical order', () => {
    it('empty array', () => {
      expect(tableSorter([], 'a')).toEqual([]);
    });
    it('3 items', () => {
      expect(tableSorter(['b', 'a', 'c'], 'a')).toEqual(['a', 'b', 'c']);
    });
    it('4 items', () => {
      const expected = ['a', 'b', 'c', 'd'];
      expect(tableSorter(['b', 'd', 'c', 'a'], 'a')).toEqual(expected);
    });
    it('mixed case items', () => {
      const expected = [
        'aa',
        'Aa',
        'ab',
        'aB',
        'Ab',
        'AB',
        'ba',
        'bA',
        'Ba',
        'BA',
      ];
      expect(
        tableSorter(
          ['aa', 'Aa', 'bA', 'aB', 'Ab', 'AB', 'ab', 'ba', 'BA', 'Ba'],
          'a',
        ),
      ).toEqual(expected);
    });
  });
  describe('reverse-alphabetical order', () => {
    it('empty array', () => {
      expect(tableSorter([], 'z')).toEqual([]);
    });
    it('3 items', () => {
      expect(tableSorter(['b', 'a', 'c'], 'z')).toEqual(['c', 'b', 'a']);
    });
    it('4 items', () => {
      const expected = ['d', 'c', 'b', 'a'];
      expect(tableSorter(['b', 'd', 'c', 'a'], 'z')).toEqual(expected);
    });
    it('mixed case items', () => {
      const expected = ['BA', 'Ba', 'bA', 'ba', 'AA', 'Aa', 'aA', 'aa'];
      expect(
        tableSorter(['BA', 'AA', 'bA', 'aA', 'ba', 'Aa', 'Ba', 'aa'], 'z'),
      ).toEqual(expected);
    });
  });
  describe('longest to shortest', () => {
    it('empty array', () => {
      expect(tableSorter([], 'long')).toEqual([]);
    });
    it('3 items', () => {
      const expected = ['zzz', 'ee', 'e'];
      expect(tableSorter(['e', 'zzz', 'ee'], 'long')).toEqual(expected);
    });
    it('4 items', () => {
      const actual = tableSorter(['e', 'bbb', 'eeee', 'ee'], 'long');
      expect(actual).toEqual(['eeee', 'bbb', 'ee', 'e']);
    });
  });
  describe('shortest to longest', () => {
    it('empty array', () => {
      expect(tableSorter([], 'short')).toEqual([]);
    });
    it('3 items', () => {
      const expected = ['e', 'ee', 'zzz'];
      expect(tableSorter(['e', 'zzz', 'ee'], 'short')).toEqual(expected);
    });
    it('4 items', () => {
      const actual = tableSorter(['e', 'zzz', 'eeee', 'ee'], 'short');
      expect(actual).toEqual(['e', 'ee', 'zzz', 'eeee']);
    });
  });
  describe('default parameters', () => {
    it('second argument is not passed', () => {
      expect(tableSorter(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });
    it('both arguments are not passed', () => {
      expect(tableSorter()).toEqual([]);
    });
  });
  describe('has no side-effects', () => {
    it('oldest to newest', () => {
      const arg = ['a', 'b', 'c'];
      const returned = tableSorter(arg, 'old');
      expect(returned !== arg).toEqual(true);
    });
    it('newest to oldest', () => {
      const strings = ['a', 'b', 'c'];
      tableSorter(strings, 'new');
      expect(strings).toEqual(['a', 'b', 'c']);
    });
    it('alphabetical order', () => {
      const strings = ['a', 'b', 'c'];
      tableSorter(strings, 'a');
      expect(strings).toEqual(['a', 'b', 'c']);
    });
    it('reverse-alphabetical order', () => {
      const strings = ['a', 'b', 'c'];
      tableSorter(strings, 'z');
      expect(strings).toEqual(['a', 'b', 'c']);
    });
    it('shortest to longest', () => {
      const strings = ['a', 'b', 'c'];
      tableSorter(strings, 'short');
      expect(strings).toEqual(['a', 'b', 'c']);
    });
    it('longest to shortest', () => {
      const strings = ['a', 'b', 'c'];
      tableSorter(strings, 'long');
      expect(strings).toEqual(['a', 'b', 'c']);
    });
    it('invalid sort type', () => {
      const strings = ['a', 'b', 'c'];
      tableSorter(strings, 'potato');
      expect(strings).toEqual(['a', 'b', 'c']);
    });
    it('no sort type', () => {
      const strings = ['a', 'b', 'c'];
      tableSorter(strings);
      expect(strings).toEqual(['a', 'b', 'c']);
    });
  });
});
