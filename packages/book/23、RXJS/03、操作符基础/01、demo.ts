/**
 * 操作符的基本使用
 */
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = of(1, 2, 3);
const result$ = source$.pipe(
  map(x => Math.pow(x, 2)),
);

source$.subscribe(console.log);
console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
result$.subscribe(console.log);
