function quicksort(arr, lo, hi) {
  var lo = lo || 0;
  var hi = hi || arr.length - 1;

  if (lo < hi) {
    var p = partition(arr, lo, hi);

    quicksort(arr, lo, p - 1);
    quicksort(arr, p + 1, hi);
  }

  if (hi - lo === arr.length - 1) {
    return arr;
  }
}

function partition(arr, lo, hi) {
  var pivot = arr[hi];
  var pivotLoc = lo;

  for (var i = lo; i < hi; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pivotLoc);
      pivotLoc++;
    }
  }
  swap(arr, hi, pivotLoc);

  return pivotLoc;
}

function swap(arr, i1, i2) {
  if (i1 === i2) return;
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}
















console.log(quicksort([4,3,6,1,0,5,2], 0, 6));




// function quicksort(array, lo, hi) {
//   var lo = lo || 0;
//   var hi = hi || array.length - 1;

//   if (lo < hi) {
//     var p = partition(array, lo, hi);

//     quicksort(array, lo, p - 1);
//     quicksort(array, p + 1, hi);
//   }
//   if (hi - lo === array.length - 1) {
//     return array;
//   }
// }

// function partition(array, lo, hi) {
//   var pivot = array[hi];
//   var pivotLoc = lo;

//   for (var i = lo; i < hi; i++) {
//     if (array[i] < pivot) {
//       swap(array, i, pivotLoc);
//       pivotLoc++;
//     }
//   }
//   swap(array, pivotLoc, hi);
//   return pivotLoc;
// }

// function swap(array, i1, i2) {
//   if (i1 === i2) return;
//   var temp = array[i1];
//   array[i1] = array[i2];
//   array[i2] = temp;
//   return array;
// }