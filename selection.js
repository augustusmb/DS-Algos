
// function selection(array) {
//   let sorted = [];
//   let count = 0;
//   let length = array.length;

//   while (count < length) {
//     var index = 0;
//     var min = array[0];
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] < min) {
//         min = array[i];
//         index = i;
//       }
//     }
//     sorted.push(min);
//     array.splice(index, 1);
//     count++;
//   }
//   return sorted;
// }


function selectionInPlace(array) {

  for (var i = 0; i < array.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min === i) {
      // do nothing
    } else {
      j = j - 1;
      var swapped = array[min];
      array[min] = array[i];
      array[i] = swapped;
    }
  }

  return array;
}


console.log(selectionInPlace([2, 1, 4, 0, 0, 15, 23, 1, 3, 15, 42, 100]));