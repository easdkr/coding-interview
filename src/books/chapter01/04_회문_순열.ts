/**
 * 문제: 1.4 회문 순열
 * - 주어진 문자열이 회문(palindrome)의 순열인지 아닌지 확인하는 함수를 작성하라.
 */

/**
 * 해답:
 * - 각 문자의 개수를 센 다
 * - 각 문자의 개수가 모두 짝수이거나, 홀수인 문자가 1개 인 경우 true, 이외에는 false를 반환하낟.
 */
export function isPermutationOfPalindrome(phrase: string): boolean {
  const counts = new Map<string, number>();
  [...phrase.split(' ').join('').toLowerCase()].forEach((c) =>
    counts.set(c, counts.has(c) ? counts.get(c) + 1 : 1),
  );
  const odds = [...counts.values()].filter((c) => c % 2).length;
  return odds === 1 || odds === 0;
}
