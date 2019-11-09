/**
 * 依次发出给定区间内的数字。
 */
import { range } from 'rxjs';

const source$ = range(1, 10);
source$.subscribe(value => console.log(value));
