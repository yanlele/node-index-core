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

/**
 * 递归法
 *
 * @param l1
 * @param l2
 */
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1?.val <= l2?.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2
  }
}

const result = mergeTwoLists(l1.head, l2.head);

console.log(JSON.stringify(result, undefined, 4));
