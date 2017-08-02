function Queue(capacity) {
  this._capacity = capacity || infinity;
  this._storage = {};
  this._head = 0;
  this._count = 0;
  this._end = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this._count === this._capacity) {
    return 'Max capacity reached';
  }
  this._storage[this._end++] = value;
  this._count++;
  return this._count;
};
// Time complexity: O(1)

Queue.prototype.dequeue = function() {
  var dequeued = this._storage[this._head++];
  this._count--;
  return dequeued;
};
// Time complexity: O(1)

Queue.prototype.peek = function() {
  return this._storage[this._head];
};

Queue.prototype.count = function() {
  return this._count;
};
// Time complexity: O(1)

Queue.prototype.contains = function(value) {
  for (var key in this._storage) {
    if (this._storage[key] === value) {
      return true;
    }
  }
  return false;
}
// Time complexity: O(n)


Queue.prototype.until = function(value) {
  let count = 1;
  for (var i = this._head; i <= this._end; i++) {
    if (this._storage[i] === value) {
      return count;
    }
    count++;
  }
  return null;
}
// Time complexity: O(n)




var myQueue = new Queue(3);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
console.log(myQueue._storage, myQueue._head);
console.log(myQueue.until('b'), 'should be 1');
console.log(myQueue.until('c'), 'should be 2');
console.log(myQueue.until('d'), 'should be null');