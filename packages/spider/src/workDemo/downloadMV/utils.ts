/**
 * 尾调用优化， 用 while
 * @param f
 */
export const tco = (f: Function) => {
  let value;
  let action = false;
  let accumulated = [];
  return async (...args) => {
    accumulated.push(args);
    if (!action) {
      action = true;
      while (accumulated.length) {
        value = await f.apply(this, accumulated.shift());
      }
      action = false;
      return value;
    }
  };
};
