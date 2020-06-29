const createIterator = (items: any[]) => {
  let i = 0;
  return {
    next: () => {
      const done = i >= items.length;
      const value = !done ? items[i++] : undefined;
      return {
        done,
        value,
      };
    },
  };
};

const iterator = createIterator([1, 3, 5]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next());

export default {};
