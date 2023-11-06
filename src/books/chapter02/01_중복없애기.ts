/**
 * 중복없애기: 정렬되어 있지 않은 연결리스트가 주어졌을 때 이 리스트에서 중복되는 원소를 제거하는 코드를 작성하라.
 * 시간복잡도: O(n)
 */
export const removeDuplicates = <T>(list: Array<T>): Array<T> => [
  ...new Set(list),
];

/**
 * set을 사용하지 않고 캐싱을 이용한 방법
 * 시간복잡도: O(n)
 */
export const removeDuplicateWithCache = <T>(list: Array<T>): Array<T> => {
  const cache = new Map<T, boolean>();
  return list.filter((item) => {
    if (cache.has(item)) return false;
    cache.set(item, true);
    return true;
  });
};

/**
 * 추가적인 자료구조를 사용하지 않고 풀 수 있는 방법
 */
export const removeDuplicateWithoutCache = <T>(list: Array<T>): Array<T> =>
  list.filter((item, index) => list.indexOf(item) === index);
