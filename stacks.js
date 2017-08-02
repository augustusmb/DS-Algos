var Stack = function(){
    this.storage = "";
};

Stack.prototype.push = function(val){
  this.storage += '***' + val;
};

Stack.prototype.pop = function(){
  var last = this.storage.lastIndexOf('***') + 3;
  var popped = this.storage.slice(last);
  this.storage = this.storage.slice(0, last - 3);
  return popped;
};

Stack.prototype.size = function(){
  return this.storage.match(/[*]+/g).length;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("Redbeans");
myWeeklyMenu.push("Bacon");
myWeeklyMenu.push("Eggs");
myWeeklyMenu.push("RomanCheese");


console.log(myWeeklyMenu.size());