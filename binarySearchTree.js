'use strict';

class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
      return;
    }

    if (key < this.key) {
      if (this.left) {
        this.left.insert(key, value);
      } else {
        this.left = new BinarySearchTree(key, value, this);
      }
    } else {
      if (this.right) {
        this.right.insert(key, value);
      } else {
        this.right = new BinarySearchTree(key, value, this);
      }
    }

  }

  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (key === this.key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    //if node getting replaced has a parent
    if(this.parent){
      //if on left or right of parent
      if(this.parent.left === this){
        this.parent.left = node;
      } else if (this.parent.right === this){
        this.parent.right = node;
      }

      if(node){
        node.parent = this.parent;
      }
    } else {
      //root item being replaced
      if(node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }

  }

  _findMin() {
    if(this.left){
      return this.left._findMin();
    } else {
      return this;
    }
  }
}


module.exports = BinarySearchTree;










/* ------------------- Morgan practicing algorithms ----------------------- */

//input: sorted array [1, 3, 5, 6, 9]
//output: binary search tree (height-balanced)  
/*
    5
  3   6
1  n n 9
*/

//find middle value (index -> length / 2)
//insert middle into bst (root)
//iterate from middle to left (decrement), inserting each value
//iterate from middle to right (incrementing counter), inserting each value

function treeFromArray(sortedArr){
  const searchTree = new BinarySearchTree();

  const middleIndex = Math.floor((sortedArr.length - 1)/2); //length 8 -> 3, length 9 -> 4
  for(let i = middleIndex; i >= 0; i--){
    searchTree.insert(sortedArr[i], sortedArr[i]);
  }
  for(let i = middleIndex + 1; i < sortedArr.length; i++){
    searchTree.insert(sortedArr[i], sortedArr[i]);
  }

  return searchTree;
}

// console.log(treeFromArray([1, 5, 7, 8, 20]));


//RECURSIVE SOLUTION
function treeFromArrayRec(sortedArr, searchTree = new BinarySearchTree() ){
  if(sortedArr.length === 0){
    return;
  }
  const middleIndex = Math.floor((sortedArr.length - 1)/2);
  searchTree.insert(sortedArr[middleIndex], sortedArr[middleIndex]);
  treeFromArrayRec(sortedArr.slice(0, middleIndex).concat(sortedArr.slice(middleIndex + 1, sortedArr.length)), searchTree);
  return searchTree;
}

console.log(treeFromArrayRec([1, 5, 7, 8, 20]));

