/**
 * 简写的 subscribe
 */
import { Observable } from 'rxjs';
import { OnSubscribe } from '../utils';

const { create } = Observable;

const onSubscribe: OnSubscribe<number> = observer => {
  let time = 0;
  const handleInterval = setInterval(() => {
    time += 1;
    observer.next(time);
    if (time > 5) {
      clearInterval(handleInterval);
      observer.complete();
    }
  }, 500);
};

const source$: Observable<number> = create(onSubscribe);

source$.subscribe(
  value=>console.log('next: ', value),
  err => console.log(err), // 如果不想要 err 的话， 可以直接置位 null 就可以了
  ()=> console.log('complete'),
);
