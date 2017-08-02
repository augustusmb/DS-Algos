var Stack = function(){
    this.storage = [];
};

Stack.prototype.push = function(val){
  this.storage.push(val);
};

Stack.prototype.pop = function(){
  return this.storage.pop();
};

Stack.prototype.size = function(){
  return this.storage.length;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
myWeeklyMenu.push("Eggs");
myWeeklyMenu.push("Bacon");
myWeeklyMenu.push("Greens");


console.log(myWeeklyMenu.storage);
console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.size());
