import {
  removeDuplicates,
  removeDuplicateWithCache,
  removeDuplicateWithoutCache,
} from '../src/books/chapter02/01_중복없애기.js';

const testCases = [
  {
    array: [1, 2, 3, 3, 4, 4, 5],
    expected: [1, 2, 3, 4, 5],
  },
  {
    array: [2, 2, 2, 2, 2, 2, 2],
    expected: [2],
  },
  {
    array: [5, 4, 3, 2, 1, 5, 4, 3, 2, 1],
    expected: [5, 4, 3, 2, 1],
  },
];

describe('removeDuplicate', () => {
  test.each(testCases)(
    'should remove duplicates from an array',
    ({ array, expected }) => {
      // when
      const received = removeDuplicates(array);

      // then
      expect(received).toEqual(expected);
    },
  );
});

describe('removeDuplicateWithCache', () => {
  test.each(testCases)(
    'should remove duplicates from an array',
    ({ array, expected }) => {
      // when
      const received = removeDuplicateWithCache(array);

      // then
      expect(received).toEqual(expected);
    },
  );
});

describe('removeDuplicateWithoutCache', () => {
  test.each(testCases)(
    'should remove duplicates from an array',
    ({ array, expected }) => {
      // when
      const received = removeDuplicateWithoutCache(array);

      // then
      expect(received).toEqual(expected);
    },
  );
});
