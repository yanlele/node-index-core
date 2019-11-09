import { of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

const myPromise = willReject => new Promise((resolve, reject) => {
  if (willReject) {
    reject('rejected!');
  } else {
    resolve('resolved!');
  }
});

// 先发出true , 然后在发出 false
const source$ = of(false, true);
const example$ = source$.pipe(
  // 这个地方， 如果先发射出true, 那么 promise 就会走到rejected 里面
  // 这个时候实际上状态已经停止了
  mergeMap(value => fromPromise(myPromise(value))),
  catchError(
    error => of(`Error： ${error}`), // 如果出现了, 那么重新返回一个 observable
  ),
);
example$.subscribe(
  value => console.log('next: ', value),
  err => console.log('err: ', err),
  () => console.log('complete'),
);


