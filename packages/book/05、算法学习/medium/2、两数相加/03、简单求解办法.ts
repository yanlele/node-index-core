import { ListNode } from '../../other/01、链表';
import { l1, l2 } from './consts';

function addTwoNumber(l1: ListNode, l2: ListNode) {
  let curry = 0, node: ListNode, prevNode: ListNode;
  while (l1 || l2 || curry !== 0) {
    const val1 = l1?.val ? l1.val : 0;
    const val2 = l2?.val ? l2.val : 0;

    let sum = val1 + val2 + curry;
    curry = Math.floor(sum / 10);
    sum = sum % 10;

    const currentNode = new ListNode(sum);
    if (prevNode) {
      prevNode.next = currentNode;
    } else {
      node = currentNode;
    }
    prevNode = currentNode;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return node;
}

/* ==============================  run - Start ============================== */
console.log(addTwoNumber(l1.head, l2.head));
/* ==============================  run - End   ============================== */

