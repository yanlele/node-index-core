import { tree, Tree } from './datsSource';

const flatten02 = (data: Tree[], pid: string): Tree[] => {
  return data.reduce((previousValue, currentValue) => {
    const { id, name, children = [] } = currentValue;
    return previousValue.concat([{ id, name, pid }], flatten02(children, id));
  }, []);
};

console.log(flatten02(tree, '0'));
