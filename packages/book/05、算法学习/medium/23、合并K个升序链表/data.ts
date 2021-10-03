import { NodeList } from '../../other/01、链表';

const arr1 = [1, 4, 5];
const arr2 = [1, 3, 4];
const arr3 = [2, 6];

const nodeList1 = new NodeList();
const nodeList2 = new NodeList();
const nodeList3 = new NodeList();

arr1.forEach(item => nodeList1.append(item));
arr2.forEach(item => nodeList2.append(item));
arr3.forEach(item => nodeList3.append(item));

export const list = [nodeList1.head, nodeList2.head, nodeList3.head];
