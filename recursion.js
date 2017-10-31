

function recursiveReverse(arr, num) {
  var reversed = [];
  function addItems(orderedArr) {
    if (orderedArr.length > 0) {
    reversed.push(orderedArr.pop());
    addItems(orderedArr);

    }
  }

  addItems(arr);
  return reversed;
}



console.log(recursiveReverse([1,3,5,9,15]));