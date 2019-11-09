/**
 * 示例 2: 发出对象、数组和函数
 */
import { of } from 'rxjs';

const source$ = of({name: 'yanle'}, [1,2,3,4,5,6], function(){console.log('hello rxjs')});

source$.subscribe(value => console.log(value));
