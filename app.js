
var test = [1,2,2,3,4,5,7];

var findErrorNums = function(nums) {
    var duplicate = 0;
    var missing = 0;
    var seen = {};

    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) duplicate = nums[i];
        seen[nums[i]] = true;
    }

    for (var j = 1; j < nums.length; j++) {
      if (!seen[j]) {
        missing = j;
      }
    }

    return [duplicate, missing ];
};


console.log(findErrorNums(test));