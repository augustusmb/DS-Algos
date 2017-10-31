function Node(val) {
  this.next = null;
  this.value = val
}


function myList(headValue) {
  this.head = new Node(headValue);
  this.tail = this.head;
}

myList.prototype.addNode = function(val) {

}

myList.prototype.removeNode = function(val) {

}

myList.prototype.forEach(callback) {
  var node = this.head;
  while(node) {
    callback(node.value);
    node = node.next;
  }
}

myList.prototype.print() {
  var result = [];
  this.forEach(function(value) {
    result.push(value);
  });
  return result.join(', ');
}

myList.prototype.insertAfter(refNode, val) {

}

myList.prototype.insertHead(val) {

}

myList.prototype.removeHead() {

}

myList.prototype.findNode(val) {

}