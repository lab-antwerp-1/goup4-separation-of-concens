import { arrayOfListItems } from './array-list.js';

describe('split the items from a string into items of an array', () => {
  describe('default argument and empty string', () => {
    it('default argument', () => {
      const expected = [];
      expect(arrayOfListItems()).toEqual(expected);
    });
    it('empty string', () => {
      const string = '';
      const expected = [];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
  });
  describe('items with comma', () => {
    it('word list', () => {
      const string = 'water, oil, milk';
      const expected = ['water', 'oil', 'milk'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('word and number list', () => {
      const string = 'astreet50, bstreet1, cstreet5';
      const expected = ['astreet50', 'bstreet1', 'cstreet5'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('email list', () => {
      const string = 'a@gmail.com, b@gmail.com, c@gmail.com';
      const expected = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
  });
  describe('items with semicolon', () => {
    it('word list', () => {
      const string = 'a; b; c';
      const expected = ['a', 'b', 'c'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('number list', () => {
      const string = '1; 2; 3';
      const expected = ['1', '2', '3'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('email list', () => {
      const string = 'a@gmail.com; b@gmail.com; c@gmail.com';
      const expected = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
  });
  describe('items without space between', () => {
    it('word list with comma', () => {
      const string = 'a,b,c';
      const expected = ['a', 'b', 'c'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('word list with semicolon', () => {
      const string = 'a;b;c';
      const expected = ['a', 'b', 'c'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('number list', () => {
      const string = '1,2,3';
      const expected = ['1', '2', '3'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
  });
  describe('items with space between', () => {
    it('word list with comma', () => {
      const string = 'a, b, c';
      const expected = ['a', 'b', 'c'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('word list with semicolon', () => {
      const string = 'a; b; c';
      const expected = ['a', 'b', 'c'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('word list with semicolon and comma', () => {
      const string = 'a; b; c, d';
      const expected = ['a', 'b', 'c', 'd'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
    it('number list', () => {
      const string = '1, 2, 3';
      const expected = ['1', '2', '3'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
  });
  describe('with and without space between items', () => {
    it('with and without space between items', () => {
      const string = 'a;b; c,d, e';
      const expected = ['a', 'b', 'c', 'd', 'e'];
      expect(arrayOfListItems(string)).toEqual(expected);
    });
  });
});
