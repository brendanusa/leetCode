/**
 * @param {number[]} nums
 * @return {number}
 */


var rob = function(nums) {

 // NAIVE
//   let highestTotal = 0;

//   const addTotal = (tempTotal, i) => {
//     if (i >= nums.length) {
//       return highestTotal = tempTotal > highestTotal ? tempTotal : highestTotal;
//     }
//     tempTotal += nums[i];
//     addTotal(tempTotal, i + 2);
//     addTotal(tempTotal, i + 3);
//   }

//   addTotal(0, 0);
//   addTotal(0, 1);

//   return highestTotal;

  numsMap = nums.reduce((acc, val, i) => {
    acc.push([val, i])
    return acc;
  }, []).sort((a, b) => a[0] - b[0]);

  console.log(numsMap)


};

console.log(rob([2, 1, 1, 2]))