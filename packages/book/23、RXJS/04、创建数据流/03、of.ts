/**
 * 发出数字序列
 */
import { Observable, of } from 'rxjs';

const source$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7);

source$.subscribe(value => console.log(value));
