import { tableSorter } from './table-sorter.js';

describe('applies sorting parameters to string arrays', () => {
  describe('default parameters', () => {
    it('no values should return empty array', () => {
      expect(tableSorter([], '-')).toEqual([]);
    });
    it('empty array should return empty array', () => {
      expect(tableSorter([], 'new')).toEqual([]);
    });
    it('default sorter should return original array', () => {
      const expected = ['abc', 'def', '123', '456'];
      expect(tableSorter(['abc', 'def', '123', '456'], '-')).toEqual(expected);
    });
  });
  describe('sort array from last value to first', () => {
    it('should return original array regardless of alphabetical order', () => {
      expect(
        tableSorter(['abc', 'xhd', ',,dd', '123', 'great', 'ABC'], 'new'),
      ).toEqual(['abc', 'xhd', ',,dd', '123', 'great', 'ABC']);
    });
    it('should return original array regardless of value length', () => {
      expect(tableSorter(['65849', 'abc', ',,jjd', 'AsV'], 'new')).toEqual([
        '65849',
        'abc',
        ',,jjd',
        'AsV',
      ]);
    });
    it('should return original array regardless of mixed values', () => {
      const expected = ['ff54?', '>..hs', '12883hgh', 'GH?9q'];
      expect(
        tableSorter(['ff54?', '>..hs', '12883hgh', 'GH?9q'], 'new'),
      ).toEqual(expected);
    });
  });
  describe('sort array from first value to last', () => {
    it('should return reversed array regardless of alphabetical order', () => {
      expect(
        tableSorter(['Vibe', '1119', '.!sfd', 'dsl', 'Plc'], 'old'),
      ).toEqual(['Plc', 'dsl', '.!sfd', '1119', 'Vibe']);
    });
    it('should return reversed array regardless of value length', () => {
      expect(tableSorter(['6758', 'Hjj,k3', 'we', 'hg$$ui'], 'old')).toEqual([
        'hg$$ui',
        'we',
        'Hjj,k3',
        '6758',
      ]);
    });
    it('should return reversed array regardless of mixed values', () => {
      const expected = ['blah-blah', ':ll2#e', '0734jF><', '^hsNN'];
      expect(
        tableSorter(['^hsNN', '0734jF><', ':ll2#e', 'blah-blah'], 'old'),
      ).toEqual(expected);
    });
  });
});
describe('sort array by alphabetical order', () => {
  it('should return alphabetical order regardless of chronology of values', () => {
    expect(tableSorter(['hij', 'bb8', '345', ',jo@4', 'Bi)'], 'a')).toEqual([
      ',jo@4',
      '345',
      'bb8',
      'Bi)',
      'hij',
    ]);
  });
  it('should return alphabetical order regardless of value length', () => {
    expect(tableSorter(['?ll', 'ddu', 'Dsy6', '8', '765432'], 'a')).toEqual([
      '?ll',
      '765432',
      '8',
      'ddu',
      'Dsy6',
    ]);
  });
  it('should return alphabetical order regardless of mixed values', () => {
    const expected = ['&aA1', '99', 'c{77', 'Derek', 'df%3)gh'];
    expect(
      tableSorter(['df%3)gh', 'c{77', 'Derek', '99', '&aA1'], 'a'),
    ).toEqual(expected);
  });
});
describe('sort array by reversed alphabetical order', () => {
  it('should return reversed alphabetical order regardless of chronology of values', () => {
    expect(
      tableSorter(['!uyh', 'KK72l', '547pP', 'k@oi', '33*:e'], 'z'),
    ).toEqual(['KK72l', 'k@oi', '547pP', '33*:e', '!uyh']);
  });
  it('should return reversed alphabetical order regardless of value length', () => {
    const expected = ['Type', 'ey5', '3$$ghasnM~', '1', '^jsddd5'];
    expect(
      tableSorter(['ey5', '1', '^jsddd5', 'Type', '3$$ghasnM~'], 'z'),
    ).toEqual(expected);
  });
  it('mixed values should return a reversed alphabetical order', () => {
    const actual = tableSorter(
      ['6dgbn%', 'oOb;', '[lqU2', '4EvF', 'Yuck', 'yuP'],
      'z',
    );
    expect(actual).toEqual(['yuP', 'Yuck', 'oOb;', '6dgbn%', '4EvF', '[lqU2']);
  });
});
describe('sort array values from shortest to longest', () => {
  it('should return character length order regardless of chronology of values', () => {
    expect(tableSorter(['6784$', 'hJ', 'H99', '<3', '/83'], 'short')).toEqual([
      'hJ',
      '<3',
      'H99',
      '/83',
      '6784$',
    ]);
  });
  it('should return character length order regardless of alphabetical order', () => {
    const expected = ['!', 'zZz', 'Ab-.', '=yu3GG,', '288yY^Yy'];
    expect(
      tableSorter(['=yu3GG,', 'zZz', 'Ab-.', '288yY^Yy', '!'], 'short'),
    ).toEqual(expected);
  });
  it('mixed values should return values in ascending character length order', () => {
    const actual = tableSorter(['odd3', 'X', '7f7', '{kLiIim'], 'short');
    expect(actual).toEqual(['X', '7f7', 'odd3', '{kLiIim']);
  });
});
describe('sort array values from longest to shortest', () => {
  it('should return descending character length order regardless of chronology of values', () => {
    expect(tableSorter(['ui', 'Ux/uI', '22$#wE', 'i', 'qOp'], 'long')).toEqual([
      '22$#wE',
      'Ux/uI',
      'qOp',
      'ui',
      'i',
    ]);
  });
  it('should return values in descending character length order regardless of alphabetical order', () => {
    expect(
      tableSorter(['<h1>', '62i', 'YwHhll5', '92', 'ltTtl'], 'long'),
    ).toEqual(['YwHhll5', 'ltTtl', '<h1>', '62i', '92']);
  });
  it('mixed values should return values in descending character length order', () => {
    expect(
      tableSorter(['uUu', 'loNg', '167%88jJ', '*', 'BHn'], 'long'),
    ).toEqual(['167%88jJ', 'loNg', 'BHn', 'uUu', '*']);
  });
});
describe('function has no side-effects', () => {
  it('first to last', () => {
    const arg = ['iui', 'vvV', '3#', '|k|'];
    const returned = tableSorter(arg, 'old');
    expect(returned !== arg).toEqual(true);
  });
  it('last to first', () => {
    const strings = ['Blah', 'bLaH', '61Ah'];
    tableSorter(strings, 'new');
    expect(strings).toEqual(['Blah', 'bLaH', '61Ah']);
  });
  it('alphabetical order', () => {
    const strings = ['df%3)gh', 'c{77', 'Derek', '99', '&aA1'];
    tableSorter(strings, 'a');
    expect(strings).toEqual(['df%3)gh', 'c{77', 'Derek', '99', '&aA1']);
  });
  it('reversed alphabetical order', () => {
    const strings = ['ey5', '1', '^jsddd5', 'Type', '3$$ghasnM~'];
    tableSorter(strings, 'z');
    expect(strings).toEqual(['ey5', '1', '^jsddd5', 'Type', '3$$ghasnM~']);
  });
  it('shortest to longest', () => {
    const strings = ['=yu3GG,', 'zZz', 'Ab-.', '288yY^Yy', '!'];
    tableSorter(strings, 'short');
    expect(strings).toEqual(['=yu3GG,', 'zZz', 'Ab-.', '288yY^Yy', '!']);
  });
  it('longest to shortest', () => {
    const strings = ['<h1>', '62i', 'YwHhll5', '92', 'ltTtl'];
    tableSorter(strings, 'long');
    expect(strings).toEqual(['<h1>', '62i', 'YwHhll5', '92', 'ltTtl']);
  });
  it('invalid sort type', () => {
    const strings = ['=yu3GG,', 'zZz', 'Ab-.', '288yY^Yy', '!'];
    tableSorter(strings, 'shortest');
    expect(strings).toEqual(['=yu3GG,', 'zZz', 'Ab-.', '288yY^Yy', '!']);
  });
  it('no sort type', () => {
    const strings = ['Blah', 'bLaH', '61Ah'];
    tableSorter(strings);
    expect(strings).toEqual(['Blah', 'bLaH', '61Ah']);
  });
});
