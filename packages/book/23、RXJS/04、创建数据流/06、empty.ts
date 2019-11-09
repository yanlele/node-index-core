/**
 * 立即完成
 */
import { empty } from 'rxjs';

const source$ = empty();
source$.subscribe(
  () => console.log('next'),
  null,
  () => console.log('complete'),
);
