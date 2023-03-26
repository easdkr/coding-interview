/**
 * 문제: 1.3 URLify
 * - 문자열에 들어 있는 모든 공백을 "%20"으로 바꾸는 메서드를 작성하라.
 * - 최종적으로 모든 문자를 다 담을 수 있을 만큼 충분한 공간이 이미 확보되어 있으며 문자열의 최종 길이가 함께 주어진다고 가정해도 된다.
 * - 내부에서 str의 char 배열로 바꾸고, char배열을 직접 바꾸는 식으로 구현한다.
 */

/**
 * 해답:
 *  - 뒤에서부터 거꾸로 편집한다.
 *  - 문자열 내에 얼마나 많은 공백 문자가 있는지 살펴보고
 *  - 추가 공간을 확보하고,
 *  - 역방향부터 실제 문자열을 편집한다.
 */
export function replaceSpaces(str: string, trueLength: number): string {
  const SPACE = ' ';
  const charArr = str.split('');
  const spaceCount = charArr.reduce(
    (prev, curr) => (curr === SPACE ? prev + 1 : prev),
    0,
  );
  let index = trueLength + spaceCount * 2;

  for (let i = trueLength - 1; i >= 0; --i) {
    if (charArr[i] === SPACE) {
      charArr[index - 1] = '0';
      charArr[index - 2] = '2';
      charArr[index - 3] = '%';
      index -= 3;
    } else {
      charArr[index - 1] = charArr[i];
      index -= 1;
    }
  }

  return charArr.join('');
}
