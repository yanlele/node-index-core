/*
* 合并两个有序链表
*
* https://leetcode-cn.com/problems/merge-two-sorted-lists/
* */


import { ListNode } from '../../other/01、链表';
import { l1, l2 } from './data';

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
  let node = new ListNode(0);
  const result = node;

  while (l1 || l2) {
    const val1 = l1?.val;
    const val2 = l2?.val;

    if (val1 !== undefined && val2 !== undefined) {
      if (val1 >= val2) {
        node.next = l2;
        l2 = l2.next;
      } else {
        node.next = l1;
        l1 = l1.next;
      }
      node = node.next;
    }
    else {
      node.next = l1 || l2;
      l1 = l1?.next;
      l2 = l2?.next;
      node = node.next;
    }
  }

  return result.next;
}

const result = mergeTwoLists(l1.head, l2.head);

console.log(JSON.stringify(result, undefined, 4));
