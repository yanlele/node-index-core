import { from } from 'rxjs';

// 数组转为 observable
const source$ = from([1,2,3,4,5]);
source$.subscribe(value => console.log(value));

// promise 转为 observable
const source2$ = from(
  new Promise(resolve => resolve('hello world!'))
);
source2$.subscribe(value=>console.log(value));

// 集合转为observable
const map = new Map();
map.set(1, 'hi');
map.set(2, 'bye');

const source3$ = from(map);
source3$.subscribe(value => console.log(value));
// 输出： [1, Hi'], [2, Bye]

// 字符串转为 observable
const source4$ = from('hello world');
source4$.subscribe(value => console.log(value));
// 输出: 'H','e','l','l','o',' ','W','o','r','l','d'
