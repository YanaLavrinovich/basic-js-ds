const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let prevNode = null;
  let curNode = l;
  let newList = null;
  while (curNode !== null) {
    if (curNode.value === k) {
      if (prevNode !== null) {
        prevNode.next = curNode.next;
      }
    } else if (!newList) {
      newList = curNode;
      prevNode = curNode;
    } else {
      prevNode = curNode;
    }

    curNode = curNode.next;
  }

  return newList;
}

module.exports = {
  removeKFromList,
};
