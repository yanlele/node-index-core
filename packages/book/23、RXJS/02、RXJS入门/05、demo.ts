/**
 * 关于错误机制
 */
import { Observable } from 'rxjs';
import { OnSubscribe } from './utils';

const { create } = Observable;

const onSubscribe: OnSubscribe<number> = observer => {
  observer.next(1);
  observer.error('has error');
  observer.complete();
};

const source$: Observable<number> = create(onSubscribe);

source$.subscribe({
  next: item => console.log(item),
  // 实际上出现错误之后， Observable 对象已经终结了，所以不会再执行 complete
  error: err => console.log(err),
  complete: () => console.log('complete'),
});

