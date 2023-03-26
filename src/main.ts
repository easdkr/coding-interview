import {
  isUniqueChars1,
  isUniqueChars2,
  isUniqueChars3,
} from './books/chapter01/01_중복이_없는가';
import { permutation1, permutation2 } from './books/chapter01/02_순열_확인';

// 1.1 중복이 없는가
console.log(isUniqueChars1('abcb')); //flase
console.log(isUniqueChars2('abc')); //true
console.log(isUniqueChars3('cbca')); //false

// 1.2 순열 확인
console.log(permutation1('dog', 'god')); //true
console.log(permutation2('dog', 'agod')); //false
