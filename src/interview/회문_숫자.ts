/**
 * 문제:
 * positive case : 1234321, 11, 1, 0, 131, 4321234, 123321
 * negative case : 11223344, 1332, 1423, 112213...
 *
 * constraints
 *  - toString, console.xx 사용금지
 *  - input > 0
 */

/**
 * 해답:
 * 숫자의 뒷자리부터 시작하는 새로운 숫자를 만든 뒤 원본과 같은지 비교한다.
 */
export function isBalanced(input: number): boolean {
  const origin = input;
  let reversed = 0;
  while (input) {
    reversed = reversed * 10 + (input % 10);
    input = Math.floor(input / 10);
  }
  return origin === reversed;
}
