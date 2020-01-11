import { random } from 'lodash';

const randomNumber = random(1, 2);

let getName = '';
const name = randomNumber === 1 ? (getName = 'yanle') : (getName = 'lele');

console.log(getName);
console.log(name);
