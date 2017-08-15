
function bubblesort(arr) {

  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var swapped = arr[i];
        arr[i] = arr[j];
        arr[j] = swapped;
      }
    }
  }
  return arr;
}


console.log(bubblesort([1,3,5,6,3,2,3,4,10]));