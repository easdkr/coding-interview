/**
 * 문제: 1.1 중복이 없는가
 * - 문자열이 주어졌을 때, 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라.
 * -  자료구조를 추가로 사용하지 않고 풀 수 있는 알고리즘 또한 고민하라.
 */
/**
 * 풀이 (책에 나온 방식)
 * - 먼저 면접관에게 문자열이 ASCII 문자열인지 유니코드 문자열인지 물어봐야 한다. (CS 지식의 이해를 어)
 * - 해당 문제에서는 우선 ASCII 문자열로 가정한다.
 * - ASCII 문자는 128개의 문자로 되어 있으므로 입력 문자열의 길이가 ASCII 문자 집합의 크기보다 크면 바로 false를 return 한다.
 * - 문자가 나타났는지 표시하는 boolean 배열을 사용하여, 같은 요소에 두번 접근하면 바로 false를 반환하도록 한다.
 */
export function isUniqueChars1(input: string): boolean {
  const ASCII_LENGTH = 128;
  if (input.length > ASCII_LENGTH) return false;

  const checked = new Array(ASCII_LENGTH).fill(false);

  for (const c of input.split('')) {
    if (checked[c.charCodeAt(0)]) return false;
    else checked[c.charCodeAt(0)] = true;
  }

  return true;
}

/**
 * 풀이 02
 * - 모든 가능한 문자 집합에 대한 체크를 하지 않고 Map을 이용해 등장 유무를 판단
 */
export function isUniqueChars2(input: string): boolean {
  const checked = new Map<string, boolean>();

  for (const c of input.split('')) {
    if (checked.has(c)) return false;
    else checked.set(c, true);
  }

  return true;
}

/**
 * 풀이 03
 * - 자료구조를 추가적으로 사용할 수 없는 경우,
 *   - 입력 문자열을 수정해도 된다면,문자열을 정렬한 다음 인접 문자의 동일 여부를 검사한다. O(nlogn)
 *   - 수정하지 못한다면 전체 문자열을 순회하면서 동일 여부 판단(O(N^2))
 */
export function isUniqueChars3(input: string): boolean {
  input = input.split('').sort().join('');
  for (let i = 1, length = input.length; i < length; ++i) {
    if (input[i] === input[i - 1]) return false;
  }

  return true;
}
