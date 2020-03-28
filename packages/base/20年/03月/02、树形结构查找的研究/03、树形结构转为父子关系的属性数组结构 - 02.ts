import { tree, Tree } from './datsSource';

const flatten2 = (data: Tree[], pid: string): Tree[] => {
  return data.reduce((arr, { id, name, children = [] }) => arr.concat([{ id, name, pid }], flatten2(children, id)), []);
};

console.log(flatten2(tree, '0'));
