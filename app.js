

var array = [];


var name = 'Gus';


var banana = function() {
  var name = 'Augustus';

  return function() {
    return 'Hello ' + name;
  }
}


array.push(banana());


console.log(array[0]());