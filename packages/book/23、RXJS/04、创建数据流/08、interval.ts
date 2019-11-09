import { interval } from 'rxjs';

const source$ = interval(1000);
source$.subscribe(value=>console.log(value));

