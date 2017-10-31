
function mergesort(arr) {
  if (arr.length === 1) return arr;

  var lefthalf = arr.slice(0, arr.length/2);
  var righthalf = arr.slice(arr.length/2);

  return merge(mergesort(lefthalf), mergesort(righthalf));
}

function merge(left, right) {
  var result = [];
  var ileft = 0;
  var iright = 0;

  while (result.length < (left.length + right.length)) {
    if (ileft === left.length) result = result.concat(right.slice(iright));
    else if (iright === right.length) result = result.concat(left.slice(ileft));
    else if (left[ileft] <= right[iright]) result.push(left[ileft++]);
    else result.push(right[iright++]);
  }

  return result;
}


























console.log(mergesort([10, 20, 13, 12, 43, 100, 93, 7]));












// function mergesort(array) {
//   if (array.length === 1) return array;

//   var lefthalf = array.slice(0, array.length / 2);
//   var righthalf = array.slice(array.length/2);
//   var leftsorted = mergesort(lefthalf);
//   var rightsorted = mergesort(righthalf);

//   return merge(leftsorted, rightsorted);
// }

// function merge(left, right) {
//   var result = [];
//   var ileft = 0;
//   var iright = 0;

//   while (result.length < (left.length + right.length)) {
//     if (ileft === left.length) result = result.concat(right.slice(iright));
//     else if (iright === right.length) result = result.concat(left.slice(ileft));
//     else if (left[ileft] <= right[iright]) result.push(left[ileft++]);
//     else result.push(right[iright++]);
//   }

//   return result;
// }