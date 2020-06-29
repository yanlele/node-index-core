function createIterator(items: any) {
  let i = 0;

  return {
    next: function() {
      const done = i >= items.length;
      const value = !done ? items[i++] : undefined;

      return {
        done: done,
        value: value,
      };
    },
    [Symbol.iterator]: function() {
      return this;
    },
  };
}

const iterator = createIterator([1, 2, 3]);
console.log(...iterator);
