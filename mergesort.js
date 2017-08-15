
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var leftHalf = array.slice(0, array.length/2);
  var rightHalf = array.slice(array.length/2);
  var leftSorted = mergeSort(leftHalf);
  var rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  var result = [];
  var iLeft = 0;
  var iRight = 0;

  while (result.length < (left.length + right.length)) {
    if (iLeft === left.length) result = result.concat(right.slice(iRight));
    else if (iRight === right.length) result = result.concat(left.slice(iLeft));
    else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
    else result.push(right[iRight++]);
  }

  return result
}




console.log(mergeSort([10, 20, 13, 12, 43, 100, 93, 7]));





// function mergesort(numbers) {
//   if (numbers.length <= 1) return numbers;

//   var leftHalf = numbers.slice(0, numbers.length/2);
//   var rightHalf = numbers.slice(numbers.length/2);
//   var leftSorted = mergesort(leftHalf);
//   var rightSorted = mergesort(rightHalf);

//   return merge(leftSorted, rightSorted);
// }


// function merge(left, right) {

//   var result = [];
//   var ileft = 0;
//   var iright = 0;

//   while (result.length < (left.length + right.length)) {
//     if (ileft === left.length) { result = result.concat(right.slice(iright)); }
//     else if (iright === right.length) { result = result.concat(left.slice(ileft)); }
//     else if (left[ileft] <= right[iright]) { result.push(left[ileft++]); }
//     else { result.push(right[iright++]); }
//   }

//   return result;
// }