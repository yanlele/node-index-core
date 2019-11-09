/**
 * 下⾯的代码⽰例通过pipe串接了filter和map两个lettable操作符：
 */
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';


const source$ = of(1, 2, 3, 4, 5);
const resource$ = source$.pipe(
  filter(x => x % 2 === 0),
  map(x => x * 2),
);

resource$.subscribe(console.log);
