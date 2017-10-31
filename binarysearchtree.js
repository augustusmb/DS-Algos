
function binarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

binarySearchTree.prototype.insert = function(value) {
  var bst = new binarySearchTree(value);
  if (value < this.value) {
    if (this.left) this.left.insert(value);
    else this.left = bst;
  }
  else {
    if (this.right) this.right.insert(value);
    else this.right = bst;
  }

  return this;
}

binarySearchTree.prototype.contains = function(value) {
  if (value === this.value) return true;
  if (value < this.value && this.left) {
    return this.left.contains(value);
  }
  if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
}


binarySearchTree.prototype.deleteMin = function(parent) {
  if (this.left) {
    this.left.deleteMin(this)
  }

  if (!this.left && !this.right) {
    parent.left = null;
    return
  }

  if (!this.left && this.right) {
    parent.left = this.right;
  }

  return;
}








var bst = new binarySearchTree(5);
bst.insert(7);
bst.insert(10);
bst.insert(3);
bst.insert(4);
bst.insert(2);
// bst.deleteMin(bst);
console.log(bst);



