import { memoize, values } from 'lodash';

interface ObjectItem {
  [key: string]: number;
}

const obj: ObjectItem = {
  a: 1,
  b: 2,
};

const other: ObjectItem = {
  c: 3,
  d: 4,
};

const memoizeValues = memoize(values, key => key);
memoizeValues(obj);
memoizeValues(other);

obj.a = 2;

console.log(memoizeValues.cache.get(obj));
console.log(memoizeValues.cache.get(other));

console.log(memoizeValues.cache.delete(obj));
console.log(memoizeValues.cache.get(obj));
console.log(memoizeValues.cache.get(values));
