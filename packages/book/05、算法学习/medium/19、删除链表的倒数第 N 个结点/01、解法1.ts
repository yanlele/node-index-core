import { ListNode } from '../../other/01、链表';
import { head } from './data';

function removeNthFromEnd(head: ListNode | null, n: number) {
  let prevNode: ListNode, currentNode: ListNode;
  let node;
  let length = 0;
  if (head === null) return;

  node = head;
  let index = 0;
  length++;
  while (node && node.next !== null) {
    node = node.next;
    length++;
  }

  if (length === 1 && n ===1) return null;

  const currentIndex = length - n;
  node = head;

  while (node && node.next !== null) {
    if (currentIndex === index) {
      currentNode = node;
    } else if (index - currentIndex === -1) {
      prevNode = node;
    }
    node = node.next;
    index++;
  }

  // 删除节点
  if (currentNode === head) return head.next;

  if (currentNode?.next) prevNode.next = currentNode.next;
  if (!currentNode?.next && prevNode?.next) prevNode.next = null;

  return head;
}

// 算错了一位
const result = removeNthFromEnd(head, 1);
console.log(JSON.stringify(result, undefined, 4));
