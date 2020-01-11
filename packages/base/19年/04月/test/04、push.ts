import { get } from 'lodash';

const temp = [];
temp.push(
  {
    name: '1',
    age: 1,
  },
  {
    name: 2,
    age: 2,
  },
  {
    name: '3',
  },
);

console.log(temp);

// const obj = {
//   name: 'yanle'
// };
//
// console.log(obj.age === '' ? '-' : undefined);

const obj: any = {
  name: 'yanle',
  age: 27,
  address: {
    addr: 'chengdu',
    local: 'beijing',
  },
  addr: '12',
};

const address = get(obj, 'address');
const addr = get(obj, 'addr');
console.log(address);
console.log(addr);

const result = addr || address;
console.log('result', result);
