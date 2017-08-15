// function insertion(array) {
//   var sorted = [array[0]];

//   for (var i = 1; i < array.length; i++) {
//     var curr = array[i];
//     var index = 0;
//     while (true) {
//       if (index === 0 && curr <= sorted[index]) {
//         sorted.unshift(curr);
//         break;
//       }
//       if (index === sorted.length) {
//         sorted.push(curr);
//         break;
//       }
//       if (curr >= sorted[index - 1] && curr <= sorted[index]) {
//         sorted.splice(index, 0, curr);
//         break;
//       }
//       index++;
//     }
//   }
//   return sorted;
// }


function insertionInPlace(array) {

}

console.log(insertion([3,1,2,7,6,0,1, 1]));