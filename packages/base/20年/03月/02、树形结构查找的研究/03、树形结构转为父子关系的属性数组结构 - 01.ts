import { tree, Tree } from './datsSource';

/**
 * 思路
 *
 * 初始化一个空数组，从tree的顶端开始遍历，当前节点有子节点时，一边继续遍历子节点，一边在当前节点上删除子节点，将当前节点push到空数组。
 *
 * @param tree
 */
const flatten1 = (tree: Tree[]): Tree[] => {
  const arr: Tree[] = [];
  const spread = (tree: Tree[], pid: string): void => {
    for (let index = 0; index < tree.length; index++) {
      const item = tree[index];
      const { id, name } = item;
      arr.push({ id, name, pid });
      if (item.children) {
        spread(item.children, item.id);
        delete item.children;
      }
    }
  };
  spread(tree, '0');
  return arr;
};

console.log(flatten1(tree));
