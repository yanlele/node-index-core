// 如果Observable 是不间断的推送出一串正整数
// 需要在最后结束的时候调用终结程序的方法

// RxJS v6+
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs/src/internal/Subscriber';
import { PartialObserver, TeardownLogic } from 'rxjs/src/internal/types';

const { create } = Observable;

type OnSubscribe<T> = (subscriber: Subscriber<T>) => TeardownLogic;

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

const theObserver: PartialObserver<number> = {
  next: item => console.log(item),
  complete: () => console.log('没有更多数据'),
};

source$.subscribe(theObserver);
