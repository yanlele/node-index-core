/**
 * 发出多个值的 observable
 */
import { Observable } from 'rxjs';

const { create } = Observable;

// 创建在订阅函数中发出 'Hello' 和 'World' 的 observable 。
const hello$: Observable<string> = create(observer => {
  observer.next('hello');
  observer.next('world');
});

hello$.subscribe(value => console.log(value));
