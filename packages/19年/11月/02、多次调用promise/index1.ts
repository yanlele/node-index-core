const { random } = require('lodash');

const promiseCreate = str => new Promise(resolve => {
  setTimeout(() => resolve(str), random(500, 1000));
});


const testCreate = async str => {
  const result = await promiseCreate(str);
  console.log(result);
};

testCreate(1);
testCreate(2);



