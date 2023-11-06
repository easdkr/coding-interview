import {
  isUniqueChars1,
  isUniqueChars2,
  isUniqueChars3,
} from './books/chapter01/01_중복이_없는가';
import { permutation1, permutation2 } from './books/chapter01/02_순열_확인';
import { replaceSpaces } from './books/chapter01/03_URLify';
import { isPermutationOfPalindrome } from './books/chapter01/04_회문_순열';
import { removeDuplicates } from './books/chapter02/01_중복없애기';

// 1.1 중복이 없는가
console.log(isUniqueChars1('abcb')); //flase
console.log(isUniqueChars2('abc')); //true
console.log(isUniqueChars3('cbca')); //false

// 1.2 순열 확인
console.log(permutation1('dog', 'god')); //true
console.log(permutation2('dog', 'agod')); //false

// 1.3 URLify
console.log(replaceSpaces('Mr John Smith', 13)); //Mr%20John%20Smith

// 1.4 회문순열
console.log(isPermutationOfPalindrome('tact coa')); //true

// 2.1 중복이 없는가
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8])); //[1, 2, 3, 4, 5, 6, 7, 8]
