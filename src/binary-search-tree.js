const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this._root = null; // root bst
  }
  //возвращает корневой узел дерева
  root() {
    if (!this._root) return null;
    else return this._root;
  }

  //добавить узел с data в дерево
  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
    } else {
      this.treeComparison(this._root, newNode)
    }
  }
  treeComparison(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.treeComparison(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.treeComparison(node.right, newNode)
      }
    }
  }

  //возвращает, true если узел с data существует в дереве и false в противном случае
  has(data) {
    let current = this._root;
    let latestNode = null;
    while (current != null) {
      if (current.data > data) {
        latestNode = current;
        current = current.left;
      } else if (current.data === data) {
        return true;
      }
      else {
        current = current.right

      };
    }
    return false;
  }

  //возвращает узел с data, если узел с data существует в дереве и null в противном случае
  find(data) {
    let current = this._root;
    while (current != null) {
      if (current.data === data) {
        return current;
      } else if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  //удаляет узел с data из дерева, если узел с data существует
  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        } else {
          let minRight = node.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeNode(node.right, minRight.data);
          return node;
        }
      }
    }
  }


  // возвращает минимальное значение, хранящееся в дереве (или null если в дереве нет узлов)
  min() {
    let minNode = this._root;
    while (minNode.left !== null) {
      minNode = minNode.left;
    }
    return minNode.data
  }

  //возвращает максимальное значение, хранящееся в дереве (или null если в дереве нет узлов)
  max() {
    let maxNode = this._root;
    while (maxNode.right !== null) {
      maxNode = maxNode.right;
    }
    return maxNode.data
  }
}
const tree = new BinarySearchTree();
tree.add(2);
tree.add(3);
tree.add(4);
console.debug(tree.root().data)
module.exports = {
  BinarySearchTree
};