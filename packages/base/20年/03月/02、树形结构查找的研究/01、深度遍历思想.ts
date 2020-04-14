import { tree, Tree } from './datsSource';

const deepQuery = (tree: Tree[], id: string): Tree => {
  let isGet = false;
  let retNode: Tree = null;
  const deepSearch = (tree: Tree[], id: string): void => {
    for (let index = 0; index < tree.length; index++) {
      if (tree[index].children && tree[index].children.length > 0) {
        deepSearch(tree[index].children, id);
      }

      if (id === tree[index].id || isGet) {
        if (!isGet) retNode = tree[index];
        isGet = true;
        break;
      }
    }
  };
  deepSearch(tree, id);
  return retNode;
};

console.log(123);
console.time();
const node = deepQuery(tree, '10102');
console.timeEnd();
console.log(node);
