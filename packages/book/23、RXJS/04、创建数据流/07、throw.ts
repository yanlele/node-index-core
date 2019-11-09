/**
 * 示例 1: 在订阅上抛出错误
 */
import { throwError } from 'rxjs';

const source$ = throwError('this is an error!');
source$.subscribe(
  value => console.log(value),
  err => console.log('error: ', err),
  () => console.log('complete!'),
);
