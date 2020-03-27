import { tree, Tree } from './datsSource';

const breadthQuery = (tree: Tree[], id: string) => {
  let stark: Tree[] = [];
  stark = stark.concat(tree);
  while (stark.length) {
    const temp = stark.shift();
    if (temp.children) stark = stark.concat(temp.children);
    if (temp.id === id) return temp;
  }
};

console.time();
const node = breadthQuery(tree, '10102');
console.timeEnd();
console.log(node);
