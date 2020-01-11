const { random } = require('lodash');

const promiseCreate = (str: number) =>
  new Promise(resolve => {
    setTimeout(() => resolve(str), random(500, 1000));
  });

const testCreate = async (str: number) => {
  const result = await promiseCreate(str);
  console.log(result);
};

testCreate(1);
testCreate(2);
