/**
 * 문제: 1.2 순열 확인
 * - 문자열 두 개가 주어졌을 때 이 둘이 서로 순열 관계에 있는지 확인하는 메서드를 작성하라.
 *
 * tips: 대소문자를 구분해야하는지, 공백은 있는지 물어봐야 한다.
 */

/**
 * 해답 1
 * - 문자열을 sort() 하고 같은 문자 인지 확인 O(2*nlogn)
 */
export function permutation1(s: string, t: string): boolean {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

/**
 * 해답 2
 * - 문자의 출현 횟수가 같은지 검사
 */
export function permutation2(s: string, t: string): boolean {
  const checked = new Map<string, number>();

  // s를 순회하며 출현 횟수 counting
  for (const c of s) {
    checked.set(c, checked.has(c) ? checked.get(c) + 1 : 1);
  }

  // t를 순회하면 출현 횟수 빼기
  for (const c of t) {
    if (!checked.has(c) || checked.get(c) === 0) return false;
    checked.set(c, checked.get(c) - 1);
  }

  return true;
}
