'use strict';

const BinarySearchTree = require('./binarySearchTree');
const BackwardSearchTree = require('./backwardSearchTree');

function main() {
  const BST = new BinarySearchTree();
  const TSB = new BackwardSearchTree();
  BST.insert(3, 'three');
  BST.insert(1, 'one');
  BST.insert(4, 'four');
  BST.insert(6, 'six');
  BST.insert(9, 'nine');
  BST.insert(2, 'two');
  BST.insert(5, 'five');
  BST.insert(7, 'seven');
  BST.insert(8, 'eight');

  TSB.insert(3, 'three');
  TSB.insert(1, 'one');
  TSB.insert(4, 'four');
  TSB.insert(6, 'six');
  TSB.insert(9, 'nine');
  TSB.insert(2, 'two');
  TSB.insert(5, 'five');
  TSB.insert(7, 'seven');
  TSB.insert(8, 'eight');
  // console.log(BST);
  // console.log(TSB);
  // console.log(BST.find(8));
  console.log('height:',height(BST));
  console.log('height:',height(TSB));

  console.log('isValid (BST): ', isValidBst(BST));
  console.log('isValid (TSB): ', isValidBst(TSB));

}
main();



/* ------------- Height of Binary Search Tree -------------- */

//input: binary search tree  ex: BST
//output: how many rows (5 for BST)

//tools: remove, find, insert, .key .value .parent .left .right
//look left and right for each node
//as long as it is not null, increment counter and call recursively on that node

//base case is no left or right
//for each call, return 1 + left depth or 1 + right depth, whichever is bigger

function height(searchTree){
  //base case
  if(!searchTree || !searchTree.key){
    return 0;
  }

  const leftDepth = height(searchTree.left);
  const rightDepth = height(searchTree.right);

  return 1 + (leftDepth > rightDepth ? leftDepth : rightDepth);
}

/* ------------------ is it BST? ---------------- */
// Write an algorithm to check whether an arbitrary binary
// tree is a binary search tree, assuming the tree does not
// contain duplicates

// input: valid bst (BST)
// output: true

// input: invalid bst (TSB)
// output: false

// recursively traverse entire tree
// base case -> if node === null -> return true
// check if left > node || right < node -> return false
// return isValidBst(node.left) && isValidBst(node.right);

function isValidBst(binaryTree) {
  // base case
  if (!binaryTree) {
    return true;
  }

  // if not in sorted order
  if (binaryTree.left && binaryTree.left.key > binaryTree.key) {
    return false;
  } else if (binaryTree.right && binaryTree.right.key < binaryTree.key) {
    return false;
  }

  // recursively check rest of tree
  return isValidBst(binaryTree.left) && isValidBst(binaryTree.right);
}
