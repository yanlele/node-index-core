import { random, range } from 'lodash';

const duringTime = 1000 * 60;
const clickTime = 100;

console.log(duringTime);

const intervalTime = duringTime / clickTime;
console.log('intervalTime', intervalTime);

console.log(random(0, intervalTime));

const total = range(clickTime).reduce(preValue => {
  preValue += random(0, intervalTime);
  return preValue;
}, 0);

console.log(total);
