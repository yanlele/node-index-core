import module from './module';

console.log(module);

console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);

import * as module2 from './module';
console.log(module2);

console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);

import { str1, str2 } from './module';
console.log(str1);
console.log(str2);

console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
import { str1 as str11 } from './module';
console.log(str11);
console.log(str1);
console.log(str1 === str11);
