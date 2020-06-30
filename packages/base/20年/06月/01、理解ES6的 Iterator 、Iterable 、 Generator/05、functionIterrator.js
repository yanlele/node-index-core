// 生成器简化代码
Object.prototype[Symbol.iterator] = function*() {
  for (const key in this) {
    yield [key, this[key]];
  }
};

const a = {
  name: 'Jimmy',
  age: 18,
  job: 'actor',
};

console.log(...a); // [ 'name', 'Jimmy' ] [ 'age', 18 ] [ 'job', 'actor' ]
