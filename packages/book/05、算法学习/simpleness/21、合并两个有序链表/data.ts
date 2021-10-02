import { NodeList } from '../../other/01、链表';

const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];

const l1 = new NodeList();
const l2 = new NodeList();
arr1.forEach(item => l1.append(item));
arr2.forEach(item => l2.append(item));
export {
  l1,
  l2,
}
