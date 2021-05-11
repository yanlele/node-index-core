/**
 * 尾调用优化， 用 while
 * @param f
 */
export const tco = (f: Function) => {
  let value: any;
  let action = false;
  const accumulated: any[] = [];
  return async (...args: any) => {
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
