function Stack(capacity) {
  this.capacity = capacity || infinity;
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(value) {
  if (this.count === this.capacity) {
    return "Max capacity already reached. Remove element before adding a new one.";
  }
  this.storage[this.count++] = value;
};
// Time complexity: O(1)

Stack.prototype.pop = function() {
  var popped = this.storage[--this.count];
  delete this.storage[this.count];
  return popped;
};
// Time complexity: O(1)

Stack.prototype.peek = function() {
  return this.storage[this.count - 1];
};
// Time complexity: O(1)

Stack.prototype.count = function() {
  return this.count;
};
// Time complexity: O(1)

// Stack.prototype.

var myStack = new Stack(1);

myStack.push('bae');
console.log(myStack.push('bee'));