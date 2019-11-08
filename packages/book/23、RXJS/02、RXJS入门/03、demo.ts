// 如果Observable 是不间断的推送出一串正整数

// RxJS v6+
import { Observable } from 'rxjs';

const { create } = Observable;

const onSubscribe = observer => {
  let time = 0;
  const handleInterval = setInterval(() => {
    time += 1;
    observer.next(time);
    if (time > 5) clearInterval(handleInterval);
  }, 500);
};

const source$ = create(onSubscribe);
const theObserver = {
  next: item => console.log(item),
};

source$.subscribe(theObserver);
