import { of } from 'rxjs';
import { min } from 'rxjs/operators';

const intialRelease$ = of(
  { name: 'yanle', age: 20 },
  { name: 'lele', age: 22 },
  { name: 'yanlelele', age: 24 },
);

const min$ = intialRelease$.pipe(
  min((a, b) => a.age - b.age)
);

min$.subscribe(value => console.log(value));

/*
结果：
{ name: 'yanlelele', age: 24 }
* */


