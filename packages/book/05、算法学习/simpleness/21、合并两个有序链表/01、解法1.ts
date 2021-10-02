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
  let resultNode = new ListNode(0);

  while (l1 || l2) {
    const val1 = l1?.val;
    const val2 = l2?.val;

    if (val1 !== null && val2 !== null) {
      if (val1 >= val2) {
        resultNode.next = l1;
        l1 = l1.next;
      } else {
        resultNode.next = l2;
        l2 = l2.next;
      }

      resultNode = resultNode.next;
    } else {
      resultNode = l1 || l2;
    }
  }

  console.log(resultNode)
  return resultNode.next;
}

console.log(mergeTwoLists(l1.head, l2.head));
