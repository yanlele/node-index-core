import { cloneDeep } from 'lodash';

const memorize = (fn: Function) => {
  const cache: any = {};
  return (...args: any) => {
    console.log(cache);
    const _args = cloneDeep(args);
    if (cache[_args]) return cache[_args];
    const result = fn.apply(fn, args);
    cache[_args] = result;
    return result;
  };
};

const params = [2, 4];
const params2 = [3, 5];

const functionMemoize = memorize(item => {
  const [one, two] = item;
  return one + two;
});

const result1 = functionMemoize(params);
const result2 = functionMemoize(params2);
const result3 = functionMemoize(params);

console.log();
console.log(result1);
console.log(result2);
console.log(result3);
