'use strict';

const BinarySearchTree = require('./binarySearchTree');
const BackwardSearchTree = require('./backwardSearchTree');

function main() {
  const BST = new BinarySearchTree();
  const TSB = new BackwardSearchTree();
  BST.insert(3, 'three');
  BST.insert(1, 'one');
  // BST.insert(4, 'four');
  // BST.insert(6, 'six');
  // BST.insert(9, 'nine');
  BST.insert(2, 'two');
  // BST.insert(5, 'five');
  // BST.insert(7, 'seven');
  // BST.insert(8, 'eight');
  BST.insert(0, 'zero');
  // BST.insert(3.5, 'three point five');
  // BST.insert(-1, 'neg One');


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
  // console.log('height:',height(BST));
  // console.log('height:',height(TSB));

  // console.log('isValid (BST): ', isValidBst(BST));
  // console.log('isValid (TSB): ', isValidBst(TSB));

  // console.log('max of BST: ', findMax(BST)); // 9
  // console.log('thirdLargest of BST: ', findThirdLargest(BST)); // 7

  // console.log(minHeight(BST));
  console.log(isBalanced(BST));
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



/* ---------------- Third largest node ----------------- */
// Write an algorithm to find the third largest node
// in a binary search tree.

// input: BST
// output: matching node (6)

// start by finding biggest node (this.right -> null)
// if (biggest.left && biggest.left.right) -> _findMax(biggest.left).parent
// if (biggest.left && biggest.left.left) -> _findMax(biggest.left.left)
// if (biggest.left) -> biggest.parent

// if biggest has no children
// if (biggest.parent) ->
//    if (biggest.parent.left) -> _findMax(biggest.parent.left)
//    if (!biggest.parent.left) -> biggest.parent.parent
// else if (!biggest.parent) -> null

function findThirdLargest(searchTree) {
  const biggest = findMax(searchTree);
  let thirdLargest;

  // biggest has no .right by definition, so 
  // check if it has a left & handle appropriately
  if (biggest.left) {
    if (biggest.left.right) {
      thirdLargest = findMax(biggest.left).parent;
    } else if (biggest.left.left) {
      thirdLargest = findMax(biggest.left.left);
    } else {
      thirdLargest = biggest.parent;
    }
  }
  // if the biggest has no children,
  // check if it has a parent
  else if (biggest.parent) {
    if (biggest.parent.left) {
      thirdLargest = findMax(biggest.parent.left);
    } else {
      thirdLargest = biggest.parent.parent;
    }
  }

  if (thirdLargest) {
    return thirdLargest.key;
  } else {
    return null;
  }
}

function findMax(searchTree) {
  if (searchTree.right) {
    return findMax(searchTree.right);
  } else {
    return searchTree;
  }
}



/* ---------------- Balanced BST ----------------- */
/* Write an algorithm that checks if a BST is balanced (i.e. a tree 
where no two leaves differ in distance from the root by more than one). */
//assume 'leaf' is a node that doesn't have both left and right

//input: binary search tree (BST)
//output: true or false   (false because max = 5 or 6, min = 2)

//use height() to get max height, then find min height, 
//then compare them

//base case if node is null ---> return min=0
//

function minHeight(searchTree){
  if(!searchTree){
    return 0;
  }

  const leftMin = minHeight(searchTree.left);
  const rightMin = minHeight(searchTree.right);

  return 1 + (leftMin <= rightMin ? leftMin : rightMin);
}

function isBalanced(searchTree){
  const max = height(searchTree);
  const min = minHeight(searchTree);

  return max - min < 2 ;
}



