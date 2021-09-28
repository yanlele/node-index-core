/**
 * 链表节点
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export class NodeList {
  head: ListNode | null;

  constructor(node: ListNode = null) {
    this.head = node;
  }

  static createNode(val: number | ListNode) {
    return typeof val === 'number' ? new ListNode(val) : val;
  }

  // 插入节点
  insert(node: number | ListNode) {
    const insertNode = NodeList.createNode(node);

    if (this.head) {
      insertNode.next = this.head;
    } else {
      insertNode.next = null;
    }
    this.head = insertNode;
  }

  // 向后插入
  append(node: number | ListNode) {
    const appendNode = NodeList.createNode(node);

    if (!this.head) {
      this.head = appendNode;
      return;
    }

    let prevNode = this.head;
    while (prevNode && !prevNode.next) {
      prevNode = prevNode.next;
    }

    prevNode.next = appendNode;
  }

  // 查找
  find(val: number) {
    let node = this.head;
    while (node !== null && node.val !== val) {
      node = node.next;
    }

    return node;
  }

  // 更新节点
  update(val: number, node: ListNode) {
    if (!this.head) return;
    let prevNode = this.head;
    while (prevNode && prevNode.next.val === val) {
      prevNode = prevNode.next;
    }
    prevNode.next = node;
  }

  // 获取节点长度
  getLength() {
    let length = 0;
    if (!this.head) return length;
    let node = this.head;
    length++;
    while (node && node.next) {
      node = node.next
      length++;
    }
    return length;
  }
}
