/**
 * 基于定时器发出偶数的 observable
 */
import { Observable } from 'rxjs';

const { create } = Observable;

const evenNumbers$: Observable<number> = create(observer => {
  let time = 0;
  const handleInterval = setInterval(() => {
    if (time % 2 === 0) {
      observer.next(time);
    }
    time++;
  }, 500);

  // 用于取消订阅
  return () => clearInterval(handleInterval);
});

const subscribe$ = evenNumbers$.subscribe(value => console.log(value));

setTimeout(() => {
  subscribe$.unsubscribe();
}, 5000);
