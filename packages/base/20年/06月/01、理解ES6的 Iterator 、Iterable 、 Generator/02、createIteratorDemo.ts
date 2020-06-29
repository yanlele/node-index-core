const createIteratorDemo = (items: any[]) => {
  let i = 0;
  return {
    next: function() {
      const done = i >= items.length;
      const value = !done ? items[i++] : undefined;
      return {
        done,
        value,
      };
    },
    [Symbol.iterator]: function() {
      return this;
    },
  };
};

const iteratorDemo: any = createIteratorDemo([1, 2, 3]);
console.log(...iteratorDemo);

export default {};
