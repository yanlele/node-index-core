import { interval } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const source$ = interval(1000).pipe(debounceTime(2000));
source$.subscribe(value => console.log(value));
/*
结果：
这样的代码不会产生任何结果
* */
