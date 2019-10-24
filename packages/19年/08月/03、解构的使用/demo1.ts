const movies = {
  list: [{ title: 'Heat' }, { title: 'Interstellar' }],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.list.length) {
          const value = this.list[index++].title;
          return { value, done: false };
        }
        return { done: true };
      },
    };
  },
};

// 有问题的例子
// const [firstMovieTitle] = movies;
// console.log(firstMovieTitle); // => 'Heat'
