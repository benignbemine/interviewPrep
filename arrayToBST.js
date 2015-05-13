// Given a sorted (increasing order) array,
// write an algorithm to create a binary search tree with minimal height.

var BinarySearchTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.addLeft = function(tree){
  this.left = tree;
}

BinarySearchTree.prototype.addRight = function(tree){
  this.right = tree;
}

BinarySearchTree.buildFromArray = function(array){
  return (function buildTree(array, left, right){
    var middle = Math.floor((right + left) / 2);
    var tree = new BinarySearchTree(array[middle]);
    left <= middle - 1 && tree.addLeft(buildTree(array, left, middle - 1));
    right >= middle + 1 && tree.addRight(buildTree(array, middle + 1, right));
    return tree;
  })(array, 0, array.length - 1);
};

