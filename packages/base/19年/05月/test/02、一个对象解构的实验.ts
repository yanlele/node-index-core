/* obj = {...obj} 其实相当于就是一个浅拷贝 */

const obj01: any = {
  name: 'yanle',
  age: 27,
  address: {
    home: '重庆',
    work: '成都',
  },
};

const obj02 = { ...obj01 };
obj01.name = 'lele';
obj01.age = 30;
obj01.address.home = '重庆 - 渝北';

console.log(obj01);
console.log(obj02);
console.log(obj01 === obj02);
