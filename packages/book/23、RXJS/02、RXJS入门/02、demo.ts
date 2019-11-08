// RxJS v6+
import { Observable } from 'rxjs';

const { create } = Observable;

const onSubscribe = observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
};

const source$ = create(onSubscribe);
const theObserver = {
  next: item => console.log(item),
};

source$.subscribe(theObserver);
