import { NodeList } from '../../other/01、链表';

const arr = [1, 2, 3, 4, 5];
const nodeList = new NodeList();

arr.forEach(item => nodeList.append(item));
export const head = nodeList.head;
