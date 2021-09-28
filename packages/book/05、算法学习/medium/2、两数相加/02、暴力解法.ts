import { ListNode, NodeList } from '../../other/01、链表';
import { l1, l2 } from './consts';

function addTwoNumbers(l1: ListNode, l2: ListNode) {
  let head1;
  let head2;
  let sum = 0;

  let curry = 0;

  const node1 = new NodeList(l1);
  const node2 = new NodeList(l2);
  const resultNodeList = new NodeList();

  while (node1.getLength() || node2.getLength() || curry !== 0) {
    head1 = node1.head;
    head2 = node2.head;
    const val1 = head1 && head1?.val ? head1.val : 0;
    const val2 = head2 && head2?.val ? head2.val : 0;
    sum = val1 + val2 + curry;
    curry = Math.floor(sum / 10);
    sum = sum % 10;

    resultNodeList.append(sum);
    if (head1) node1.remove(head1.val);
    if (head2) node2.remove(head2.val);
  }

  return resultNodeList.head;
}

/* ==============================  run - Start ============================== */
console.log(addTwoNumbers(l1.head, l2.head));
/* ==============================  run - End   ============================== */
