var Stack = function(){
    this.storage = {};
    this.size = 0;
};

Stack.prototype.push = function(val){
  let size = this.size++;
  this.storage[size] = val;
};

Stack.prototype.pop = function(){
  var popped = this.storage[this.size - 1]
  delete this.storage[this.size--];
  return popped;
};

Stack.prototype.size = function(){
  return this.size;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
myWeeklyMenu.push("Bacon");
myWeeklyMenu.push("Eggs");
myWeeklyMenu.push("Meat");
console.log(myWeeklyMenu.storage);
console.log(myWeeklyMenu.pop());

console.log(myWeeklyMenu.pop());