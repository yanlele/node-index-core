import { ListNode } from '../../other/01、链表';
import { head } from './data';

/**
 * 双指针方法
 *
 * 本质上来说是一种镜像的解法
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-ei10/
 *
 * @param head
 * @param n
 */
function removeNthFromEnd(head: ListNode | null, n: number) {
  let fast = head, slow = head;

  while (fast && n > 0) {
    [fast, n] = [fast.next, n - 1];
  }

  // 删除的是第一个元素
  if (!fast) return head.next;

  while (fast && fast.next !== null) {
    [fast, slow] = [fast.next, slow.next];
  }

  slow.next = slow.next.next;
  return head;
}

const result = removeNthFromEnd(head, 2);
console.log('result', JSON.stringify(result, undefined, 4))
