import { ListNode } from '../../other/01、链表';
import { head } from './data';

function removeNthFromEnd(head: ListNode | null, n: number) {
  let prevNode: ListNode, last: ListNode;
  if (head === null) return;
  prevNode = head;
  last = head;
  while (last && last.next !== null) {
    last = last.next;
  }
  console.log('last: ', last);
}


removeNthFromEnd(head, 1);
