function Stack(capacity) {
  this.capacity = capacity || infinity;
  this.storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
  if (this._count === this.capacity) {
    return "Max capacity already reached. Remove element before adding a new one.";
  }
  this.storage[this._count++] = value;
  return this._count;
};
// Time complexity: O(1)

Stack.prototype.pop = function() {
  var popped = this.storage[--this._count];
  delete this.storage[this._count];
  return popped;
};
// Time complexity: O(1)

Stack.prototype.peek = function() {
  return this.storage[this._count - 1];
};
// Time complexity: O(1)

Stack.prototype.count = function() {
  return this._count;
};
// Time complexity: O(1)

Stack.prototype.contains = function(val) {
  for (var key in this.storage) {
    if (this.storage[key] === val) {
      return true;
    }
  }
  return false;
}
// Time complexity: O(n)

Stack.prototype.until = function(val) {
  let count = 1;
  for (var i = this._count - 1; i >= 0; i--) {
    if (this.storage[i] === val) {
      return count;
    }
    count++;
  }
  return 'value not found';
}
// Time complexity: O(n)



var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');