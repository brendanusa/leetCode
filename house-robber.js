/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {

  let highestTotal = 0;

  const addTotal = (tempTotal, i) => {
    console.log('i', i)
    if (i >= nums.length) {
      return highestTotal = tempTotal > highestTotal ? tempTotal : highestTotal;
    }
    tempTotal += nums[i];
    addTotal(tempTotal, i + 2);
    addTotal(tempTotal, i + 3);
  }

  addTotal(0, 0);
  addTotal(0, 1);

  return highestTotal;

};

console.log(rob([2, 1, 1, 2]))