// 最基本的使用
import { defer, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observableFactory$ = () => of('http://xxx');
const source$ = defer(observableFactory$);
source$.subscribe(value => console.log(value));


// 因为本身of产生数据流占用的内存资源是极少的， 看不出来效果
// ⽐如，我们希望通过AJAX来获取服务器端的数据，可是并不想在程 序启动阶段就把AJAX请求发送出去，
// 就可以利⽤defer产⽣⼀个Observable对象，
// 当这个Observable对象被订阅的时候才发送AJAX请求，
const observableFactory2$ = () => ajax.get('https://api.github.com/repos/ReactiveX/rxjs');
const source2$ = defer(observableFactory2$);
setTimeout(()=> {
  source2$.subscribe(
    value => console.log(value.response.stargazers_count),
    () => console.log('error'),
    () => console.log('complete'),
  );
}, 3000);

