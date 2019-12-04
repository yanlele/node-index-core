import { timer } from 'rxjs';

const origin$ = timer(0, 1000)

origin$.subscribe(value => {console.log(value);});
/*
* 结果
start
0
1
2
3
......
* */
