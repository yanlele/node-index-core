Object.prototype[Symbol.iterator] = function() {
  let i = 0;
  const items = Object.entries(this);
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

const a = {
  name: 'Jimmy',
  age: 18,
  job: 'actor',
};

console.log(...a); // [ 'name', 'Jimmy' ] [ 'age', 18 ] [ 'job', 'actor' ]
