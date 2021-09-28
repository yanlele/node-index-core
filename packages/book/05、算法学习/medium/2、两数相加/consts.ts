import { NodeList } from '../../other/01、链表';

const arr1 = [2, 4, 3].reverse();
const arr2 = [5, 6, 4].reverse();
let l1 = new NodeList();
let l2 = new NodeList();

arr1.forEach(item => l1.insert(item));
arr2.forEach(item => l2.insert(item));

export {
  l1,
  l2,
};
