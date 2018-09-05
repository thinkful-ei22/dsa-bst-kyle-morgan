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
  BST.insert(8, 'eight');
  //console.log(BST);
  // console.log(BST.find(8));
  console.log('height:',height(BST));

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

