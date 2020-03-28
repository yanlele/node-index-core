import { tree, Tree } from './datsSource';

const flatten01 = (data: Tree[]): Tree[] => {
  const arr: Tree[] = [];
  const spread = (tree: Tree[], pid: string) => {
    for (let index = 0; index < tree.length; index++) {
      const { id, name, children } = tree[index];
      arr.push({ id, name, pid });
      if (children) spread(children, id);
    }
  };
  spread(data, '0');
  return arr;
};

console.log(flatten01(tree));
