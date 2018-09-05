'use strict';

const BinarySearchTree = require('./binarySearchTree');

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3, 'three');
  BST.insert(1, 'one');
  BST.insert(4, 'four');
  BST.insert(6, 'six');
  BST.insert(9, 'nine');
  BST.insert(2, 'two');
  BST.insert(5, 'five');
  BST.insert(7, 'seven');
  // console.log(BST);
  console.log(BST.find(8));

}
main();