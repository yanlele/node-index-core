import { ListNode } from '../../other/01、链表';
import { head } from './data';

/**
 * 双指针方法
 * @param head
 * @param n
 */
function removeNthFromEnd(head: ListNode | null, n: number) {
  let fast = head, slow = head;
  while (fast && n > 0) {
    [fast, n] = [fast.next, n - 1];
  }

  while (fast) {
    [fast, slow] = [fast.next, slow.next];
  }

  return slow;
}
