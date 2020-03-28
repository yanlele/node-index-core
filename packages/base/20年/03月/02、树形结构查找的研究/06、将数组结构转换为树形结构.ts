import { tree, Tree } from './datsSource';

const flatten02 = (data: Tree[], pid: string): Tree[] => {
  return data.reduce((previousValue, currentValue) => {
    const { id, name, children = [] } = currentValue;
    return previousValue.concat([{ id, name, pid }], flatten02(children, id));
  }, []);
};

const arrayData = flatten02(tree, '0');
console.log(arrayData);

/**
 * 有点秀
 * @param arrayData
 */
const treeData = (arrayData: Tree[]): Tree[] => {
  return arrayData.filter(father => {
    const branchArr = arrayData.filter(child => father.id === child.pid);
    branchArr.length > 0 ? (father.children = branchArr) : '';
    return father.pid === '0';
  });
};

console.log(JSON.stringify(treeData(arrayData), undefined, 4));
