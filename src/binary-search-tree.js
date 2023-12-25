const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  node = null;

  root() {
    return this.node;
  }

  add(data) {
    if (this.node === null) {
      this.node = new Node(data);
      return;
    }

    let curNode = this.node;
    let inserted = false;
    while (!inserted) {
      if (curNode.data > data) {
        if (curNode.left === null) {
          curNode.left = new Node(data);
          inserted = true;
        } else {
          curNode = curNode.left;
        }
      } else {
        if (curNode.right === null) {
          curNode.right = new Node(data);
          inserted = true;
        } else {
          curNode = curNode.right;
        }
      }
    }
  }

  has(data) {
    if (this.node === null) {
      return false;
    }

    let curNode = this.node;
    let hasData = false;
    while (curNode !== null) {
      if (curNode.data === data) {
        curNode = null;
        hasData = true;
      } else {
        if (curNode.data > data) {
          curNode = curNode.left;
        } else {
          curNode = curNode.right;
        }
      }
    }

    return hasData;
  }

  find(data) {
    if (this.node === null) {
      return null;
    }

    let curNode = this.node;
    let foundData = null;
    while (curNode !== null) {
      if (curNode.data === data) {
        foundData = curNode;
        curNode = null;
      } else {
        if (curNode.data > data) {
          curNode = curNode.left;
        } else {
          curNode = curNode.right;
        }
      }
    }

    return foundData;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
